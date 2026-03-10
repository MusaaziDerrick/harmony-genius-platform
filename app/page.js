export default function Home() {
  const features = [
    {
      title: "Music Reels",
      desc: "Short-form musical videos that attract audiences and increase discovery.",
    },
    {
      title: "Choir Workspace Lite",
      desc: "Digital rehearsal rooms for choirs and music groups.",
    },
    {
      title: "Creator Upload Studio",
      desc: "Publish songs, rehearsal recordings, and choir albums.",
    },
    {
      title: "Audio Marketplace",
      desc: "Discover, distribute, and monetize music.",
    },
    {
      title: "Blockchain Ownership Registry",
      desc: "Transparent creator attribution and ownership verification.",
    },
    {
      title: "Africa to Global",
      desc: "Built for emerging music ecosystems with global scalability.",
    },
  ];

  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #081016 0%, #0b0b0b 45%, #111827 100%)",
        color: "#F5F5DC",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "72px 24px 48px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.35)",
            color: "#C084FC",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Collaborative Music Infrastructure
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "56px",
            lineHeight: 1.05,
            fontWeight: 800,
            color: "#F5F5DC",
          }}
        >
          Harmony Genius
        </h1>

        <p
          style={{
            fontSize: "26px",
            fontWeight: 700,
            marginTop: "16px",
            marginBottom: "0",
            color: "#F59E0B",
          }}
        >
          Create. Earn. Collaborate. Own Your Music.
        </p>

        <p
          style={{
            maxWidth: "820px",
            margin: "28px auto 0",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "rgba(245,245,220,0.82)",
          }}
        >
          Harmony Genius is a mobile-first platform for collaborative music
          creation, choir rehearsal coordination, creator monetization, and
          transparent music ownership across emerging digital music ecosystems.
        </p>

        <div style={{ marginTop: "34px" }}>
          <a
            href="https://github.com/MusaaziDerrick/harmony-genius-platform"
            style={{
              display: "inline-block",
              background: "#F59E0B",
              color: "#0b0b0b",
              textDecoration: "none",
              padding: "14px 24px",
              borderRadius: "14px",
              fontWeight: 700,
              marginRight: "12px",
              marginBottom: "12px",
            }}
          >
            View GitHub
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#F5F5DC",
              textDecoration: "none",
              padding: "14px 24px",
              borderRadius: "14px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Contact Founder
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "16px 24px 54px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "28px",
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "14px",
              fontSize: "34px",
              color: "#F5F5DC",
            }}
          >
            Why Harmony Genius?
          </h2>
          <p
            style={{
              margin: 0,
              lineHeight: "1.9",
              fontSize: "18px",
              color: "rgba(245,245,220,0.8)",
            }}
          >
            Choirs, singers, and creators still depend on fragmented messaging
            tools to coordinate rehearsals, distribute recordings, and manage
            authorship. Harmony Genius brings discovery, rehearsal
            collaboration, creator publishing, and ownership transparency into
            one structured ecosystem.
          </p>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginTop: "18px",
            marginBottom: "24px",
            color: "#F5F5DC",
          }}
        >
          Core Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "22px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  color: "#F59E0B",
                  fontSize: "22px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  lineHeight: "1.8",
                  color: "rgba(245,245,220,0.78)",
                  fontSize: "16px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 56px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              background: "rgba(15,118,110,0.12)",
              border: "1px solid rgba(15,118,110,0.35)",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#2DD4BF", fontSize: "26px" }}>
              Hybrid Blockchain Architecture
            </h3>
            <p
              style={{
                margin: 0,
                lineHeight: "1.85",
                color: "rgba(245,245,220,0.82)",
              }}
            >
              Streaming, user interaction, and payments run on conventional
              cloud infrastructure, while creator ownership metadata and
              attribution logs are secured through a blockchain transparency
              layer.
            </p>
          </div>

          <div
            id="contact"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.35)",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#C084FC", fontSize: "26px" }}>
              Founder & Contact
            </h3>
            <p style={{ margin: "0 0 10px", lineHeight: "1.8" }}>
              <strong>Derrick Musaazi</strong>
            </p>
            <p style={{ margin: "0 0 10px", lineHeight: "1.8" }}>
              Music director, filmmaker, educator, and community leader building
              digital infrastructure for collaborative music ecosystems.
            </p>
            <p style={{ margin: "0 0 8px", lineHeight: "1.8" }}>
              Email: founder@harmonygenius.app
            </p>
            <p style={{ margin: 0, lineHeight: "1.8" }}>
              GitHub: MusaaziDerrick/harmony-genius-platform
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
