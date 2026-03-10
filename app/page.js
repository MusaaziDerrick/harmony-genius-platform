export default function Home() {
  const features = [
    {
      title: "Music Reels",
      desc: "Short-form musical videos that attract both musicians and casual audiences.",
    },
    {
      title: "Choir Workspace Lite",
      desc: "A digital rehearsal room for choirs, music groups, and collaborative preparation.",
    },
    {
      title: "Creator Upload Studio",
      desc: "A publishing environment for singles, albums, rehearsal tracks, and creative releases.",
    },
    {
      title: "Audio Marketplace",
      desc: "A structured environment for discovery, distribution, and monetization.",
    },
  ];

  const screens = [
    {
      title: "Home Experience",
      image: "/home-screen.png",
      desc: "A welcoming entry point for discovery, navigation, and engagement.",
    },
    {
      title: "Music Reels",
      image: "/reels-screen.png",
      desc: "Short musical moments designed for retention, discovery, and casual engagement.",
    },
    {
      title: "Choir Workspace",
      image: "/choir-workspace.png",
      desc: "Digital rehearsal coordination for choirs and collaborative music groups.",
    },
    {
      title: "Audio Marketplace",
      image: "/marketplace-screen.png",
      desc: "A space for distributing songs, albums, hymn packs, and musical releases.",
    },
    {
      title: "Creator Upload Studio",
      image: "/creator-upload.png",
      desc: "A focused publishing flow for artists, choirs, and music creators.",
    },
    {
      title: "Admin & Governance",
      image: "/admin-screen.png",
      desc: "Administrative visibility for structured platform control and moderation.",
    },
  ];

  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(124,58,237,0.18), transparent 25%), radial-gradient(circle at top right, rgba(245,158,11,0.14), transparent 22%), linear-gradient(180deg, #05070a 0%, #081018 40%, #0b0b0b 100%)",
        color: "#F5F5DC",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "80px 24px 50px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.35)",
            color: "#C084FC",
            fontSize: "14px",
            marginBottom: "18px",
            letterSpacing: "0.4px",
          }}
        >
          Collaborative Music Infrastructure • Africa to Global
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "60px",
            lineHeight: 1.02,
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
            marginBottom: 0,
            color: "#F59E0B",
          }}
        >
          Create. Earn. Collaborate. Own Your Music.
        </p>

        <p
          style={{
            maxWidth: "850px",
            margin: "26px auto 0",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "rgba(245,245,220,0.82)",
          }}
        >
          Harmony Genius is a mobile-first platform for collaborative music creation,
          choir rehearsal coordination, creator monetization, and transparent music
          ownership across emerging digital music ecosystems.
        </p>

        <div style={{ marginTop: "32px" }}>
          <a
            href="#screens"
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
              boxShadow: "0 10px 30px rgba(245,158,11,0.2)",
            }}
          >
            Explore Screens
          </a>

          <a
            href="#pitch"
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
            Watch Pitch
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px 50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "22px",
                padding: "24px",
                boxShadow: "0 10px 32px rgba(0,0,0,0.22)",
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
        id="pitch"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px 60px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "38px",
              marginTop: 0,
              marginBottom: "14px",
              color: "#F5F5DC",
            }}
          >
            Project Pitch
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 26px",
              color: "rgba(245,245,220,0.75)",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Watch the Harmony Genius concept pitch and see the vision behind a
            collaborative music ecosystem built for creators, choirs, and global audiences.
          </p>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              margin: "0 auto",
              borderRadius: "22px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 12px 36px rgba(0,0,0,0.30)",
              background: "#000",
            }}
          >
            <div style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/rWIbzuw_Wa8"
                title="Harmony Genius Pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "18px" }}>
            <a
              href="https://youtube.com/shorts/rWIbzuw_Wa8?feature=share"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                color: "#C084FC",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Open on YouTube
            </a>
          </div>
        </div>
      </section>

      <section
        id="screens"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "10px 24px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "14px",
            color: "#F5F5DC",
          }}
        >
          Platform Experience
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 34px",
            color: "rgba(245,245,220,0.75)",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Harmony Genius combines music discovery, collaboration, monetization,
          and governance into one structured ecosystem.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "22px",
          }}
        >
          {screens.map((screen) => (
            <div
              key={screen.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(90deg, rgba(15,118,110,0.18), rgba(124,58,237,0.14))",
                  padding: "18px 20px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "#F5F5DC",
                    fontSize: "22px",
                  }}
                >
                  {screen.title}
                </h3>
              </div>

              <div style={{ padding: "18px" }}>
                <img
                  src={screen.image}
                  alt={screen.title}
                  style={{
                    width: "100%",
                    borderRadius: "18px",
                    display: "block",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />

                <p
                  style={{
                    marginTop: "16px",
                    marginBottom: 0,
                    color: "rgba(245,245,220,0.75)",
                    lineHeight: "1.8",
                    fontSize: "15px",
                  }}
                >
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px 56px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
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
            <h3 style={{ marginTop: 0, color: "#2DD4BF", fontSize: "28px" }}>
              Hybrid Blockchain Architecture
            </h3>
            <p
              style={{
                margin: 0,
                lineHeight: "1.85",
                color: "rgba(245,245,220,0.82)",
              }}
            >
              Harmony Genius uses conventional cloud infrastructure for streaming,
              user interaction, and payments, while creator ownership metadata and
              attribution records are secured through a blockchain transparency layer.
            </p>
          </div>

          <div
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.35)",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#C084FC", fontSize: "28px" }}>
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
