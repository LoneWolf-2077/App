// Procedural Web Audio Synthwave Ambient Loop Generator
// Generates warm, retro analog chord structures in code without any static mp3/wav sound assets

class AmbientWaveSynth {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  private filter: BiquadFilterNode | null = null;
  private isRunning: boolean = false;
  private chordInterval: any = null;

  init() {
    if (this.ctx) return;
    
    try {
      // Create lazy context safely on first user gesture interaction
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.filter = this.ctx.createBiquadFilter();

      // Configure warm, analog dark lowpass filter to capture twilight bass
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(600, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Link graph: Custom oscillators -> Biquad Filter -> Master Gain -> Audio Output
      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("AudioContext init warning:", e);
    }
  }

  // Soft synthwave chord progressions (Am9 - Fmaj7 - Cmaj7 - G6) in various frequencies
  private chords = [
    [110.0, 164.81, 220.0, 261.63, 329.63], // Am9 (A, E, A, C, E)
    [87.31, 130.81, 174.61, 261.63, 349.23],  // Fmaj7 (F, C, F, C, F)
    [130.81, 196.0, 261.63, 329.63, 392.0],  // Cmaj7 (C, G, C, E, G)
    [98.0, 146.83, 196.0, 246.94, 293.66]    // G6 (G, D, G, B, D)
  ];

  private currentChordIdx = 0;

  play() {
    try {
      this.init();
      if (!this.ctx || !this.masterGain) return;

      if (this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }

      if (this.isRunning) return;
      this.isRunning = true;

      // Smooth transition fade-in multiplier
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value || 0.0001, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 1.5);

      // Trigger procedural synth loop progression
      this.playChord(this.chords[this.currentChordIdx]);
      
      this.chordInterval = setInterval(() => {
        try {
          this.currentChordIdx = (this.currentChordIdx + 1) % this.chords.length;
          this.playChord(this.chords[this.currentChordIdx]);
        } catch (e) {
          console.warn("Chord interval error:", e);
        }
      }, 5500);
    } catch (e) {
      console.warn("Audio play error:", e);
    }
  }

  private playChord(freqs: number[]) {
    if (!this.ctx || !this.filter) return;

    try {
      // Fade out previous oscillators safely to prevent audio artifacts
      const oldOscs = [...this.oscillators];
      const fadeTime = 0.8;
      const now = this.ctx.currentTime;

      oldOscs.forEach(o => {
        try {
          const currentGainVal = Math.max(0.0001, o.gain.gain.value);
          o.gain.gain.setValueAtTime(currentGainVal, now);
          o.gain.gain.linearRampToValueAtTime(0.0001, now + fadeTime);
          setTimeout(() => {
            try { o.osc.stop(); o.osc.disconnect(); } catch (e) {}
          }, fadeTime * 1000 + 100);
        } catch (e) {}
      });

      this.oscillators = [];

      // Trigger fresh set of procedural analog synth voices
      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.filter) return;

        try {
          const osc = this.ctx.createOscillator();
          const voiceGain = this.ctx.createGain();

          // Mix Sawtooth warmth with smooth Triangle tones
          osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
          osc.frequency.setValueAtTime(freq, now);

          // Low velocity voice weights to keep chord clean and atmospheric
          voiceGain.gain.setValueAtTime(0.0001, now);
          voiceGain.gain.linearRampToValueAtTime(idx === 0 ? 0.08 : 0.04, now + 1.0);

          osc.connect(voiceGain);
          voiceGain.connect(this.filter);

          osc.start(now);
          this.oscillators.push({ osc, gain: voiceGain });
        } catch (e) {}
      });
    } catch (e) {
      console.warn("playChord error:", e);
    }
  }

  stop() {
    if (!this.masterGain || !this.ctx) return;
    
    try {
      const now = this.ctx.currentTime;
      const currentVal = Math.max(0.0001, this.masterGain.gain.value);
      this.masterGain.gain.setValueAtTime(currentVal, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);

      setTimeout(() => {
        this.clearLocalVoices();
      }, 1300);
    } catch (e) {
      this.clearLocalVoices();
    }
  }

  private clearLocalVoices() {
    if (this.chordInterval) {
      clearInterval(this.chordInterval);
      this.chordInterval = null;
    }
    this.oscillators.forEach(o => {
      try { o.osc.stop(); o.osc.disconnect(); } catch (e) {}
    });
    this.oscillators = [];
    this.isRunning = false;
  }
}

export const ambientSynth = new AmbientWaveSynth();
