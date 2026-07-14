"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function DemoVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section aria-label="Product demo" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">See it in action</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Elyra AI Solutions, working in real time
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A quick look at the Elyra SEO+AEO Agent auditing a live site and surfacing fixes automatically.
        </p>

        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-black shadow-xl">
          <video
            ref={videoRef}
            className="aspect-video w-full"
            src="/videos/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? "Pause demo video" : "Play demo video"}
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-md transition-colors hover:bg-white"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
