import { useRef, useState } from "react";
import { motion } from "framer-motion";

/** High-quality print/paper poster from Unsplash. Replace VIDEO_SRC with your own .mp4 (e.g. from Pexels). */
const VIDEO_POSTER =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&q=90";
/** Replace with your product/printing .mp4 (e.g. Pexels). Short placeholder so play works. */
const VIDEO_SRC =
  "https://www.w3schools.com/html/mov_bbb.mp4";

const ProductVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="product-video"
      className="py-20 bg-background"
      aria-label="Product video: see our print quality"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center mb-12"
        >
          <h2
            className="section-h2 text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "var(--ink-black)" }}
          >
            See What We Print
          </h2>
          <p
            className="font-ui text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--navy)" }}
          >
            From offset to digital and screen printing—see how we bring your
            designs to life. Quality you can see and feel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-navy/10"
          style={{ boxShadow: "0 20px 50px rgba(26,44,91,0.12)" }}
        >
          <div className="relative aspect-video bg-ink-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={VIDEO_POSTER}
              src={VIDEO_SRC}
              playsInline
              loop
              muted
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              aria-label="Video showing our print quality and process. This video has no audio."
            />
            {/* Play / Pause overlay */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold rounded-2xl"
                aria-label="Play video: See our print quality"
              >
                <span
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{
                    background: "var(--gold)",
                    color: "var(--ink-black)",
                    boxShadow: "var(--shadow-gold)",
                  }}
                  aria-hidden
                >
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
            {isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Pause video"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              </button>
            )}
          </div>
          <div
            className="px-4 py-3 text-center font-ui text-sm"
            style={{ color: "var(--navy)", backgroundColor: "var(--gold-pale)" }}
          >
            <span className="font-medium" style={{ color: "var(--ink-black)" }}>
              See our print quality
            </span>
            {" · "}
            <span>No audio in this video</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductVideoSection;
