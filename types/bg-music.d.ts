// types/bg-music.d.ts

declare module "@react-element/bg-music" {
  interface BgMusicOptions {
    audioSrc?: string;
    volume?: number;
    autoPlay?: boolean;
    // Add any other options here as needed
  }

  export default class BgMusic {
    static set(options: BgMusicOptions): void;
    // Add any other static methods or properties here as needed
  }
}
