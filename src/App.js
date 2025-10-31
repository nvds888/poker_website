"use client"

import { useState } from "react"
import "./App.css"

function App() {
  const [activeMenu, setActiveMenu] = useState("home")

  const handleMenuChange = (menu) => {
    setActiveMenu(menu)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <HomePage />
      case "coaching":
        return <CoachingPage />
      case "about":
        return <AboutPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/poker-performance-logo-with-spade-symbol.jpg" alt="Poker Performance Logo" className="logo-image" />
            <span className="logo-text">POKER PERFORMANCE</span>
          </div>
          <ul className="nav-menu">
            <li className={activeMenu === "home" ? "active" : ""} onClick={() => handleMenuChange("home")}>
              HOME
            </li>
            <li className={activeMenu === "coaching" ? "active" : ""} onClick={() => handleMenuChange("coaching")}>
              COACHING
            </li>
            <li className={activeMenu === "about" ? "active" : ""} onClick={() => handleMenuChange("about")}>
              ABOUT ME
            </li>
          </ul>
        </div>
      </nav>

      {renderContent()}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Poker Performance. All rights reserved.</p>
      </footer>
    </div>
  )
}

// HOME PAGE
function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">POKER PERFORMANCE</h1>
          <p className="hero-subheadline">
            Turn your poker grind into a high-performance lifestyle. Because the strongest edge in poker isn't just
            strategy — it's how well you manage your mind, your body, and your time.
          </p>
          <button
            className="cta-button"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
          >
            <span className="button-icon">▶</span>
            GET STARTED
          </button>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <h2 className="section-title">Poker is a Game of High Performance</h2>
          <div className="content-text">
            <p>
              In a world of constant competition and variance, the players who prioritize their mental and physical
              health create a lasting edge over the rest.
            </p>

            <p>
              Success in poker isn't about playing more hands — it's about showing up every day with focus, energy, and
              a performance mindset.
            </p>

            <p className="emphasis-text">Just like in any sport, the same principles apply:</p>

            <ul className="principle-list">
              <li>
                <strong>Build structure</strong>
              </li>
              <li>
                <strong>Implement discipline</strong>
              </li>
              <li>
                <strong>Set clear, actionable goals</strong>
              </li>
              <li>
                <strong>Take consistent, purposeful action</strong>
              </li>
            </ul>

            <p>
              Whether you're battling variance, losing focus deep into a session, or struggling to find balance away
              from the tables — the solution is the same: build the foundation first.
            </p>

            <p className="final-emphasis">
              This isn't just about becoming a better poker player. It's about becoming a stronger, more focused version
              of yourself — in poker and in life.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// COACHING PAGE
function CoachingPage() {
  return (
    <>
      <section className="page-hero coaching-hero">
        <div className="page-hero-content">
          <h1>COACHING</h1>
        </div>
      </section>

      <section className="intro-section">
        <div className="content-container">
          <p className="intro-text">
            Poker is a high-performance pursuit — yet most players treat it like a grind instead of a craft that demands
            performance and preparation. Long hours, endless variance, and lack of structure lead to fatigue,
            inconsistency, and burnout.
          </p>
          <p className="intro-text">
            My coaching is focused on creating the systems, habits, and mindset required for consistent performance.
            It's not about quick motivation or generic poker advice — it's about creating a system that helps you
            perform at your best every single day.
          </p>
        </div>
      </section>

      <section className="program-section">
        <div className="content-container">
          <div className="program-card">
            <div className="program-header">
              <span className="program-icon">🥇</span>
              <h2 className="program-title">The Poker Athlete Program</h2>
            </div>

            <div className="program-overview">
              <h3>Overview</h3>
              <p>
                A 4-week personalized coaching program designed to help you operate like a high-performance athlete —
                mentally, physically, and emotionally. We'll build the habits, structure, and energy systems that
                support long-term poker success.
              </p>
            </div>

            <div className="program-includes">
              <h3>What's Included</h3>

              <div className="include-item">
                <div className="include-header">
                  <span className="checkmark">✅</span>
                  <h4>4 Weekly 1:1 Coaching Calls (30–60 minutes each)</h4>
                </div>
                <ul className="include-details">
                  <li>Deep-dive sessions to identify leaks in your mindset, structure, and performance.</li>
                  <li>Weekly adjustments to ensure you're on track.</li>
                </ul>
              </div>

              <div className="include-item">
                <div className="include-header">
                  <span className="checkmark">✅</span>
                  <h4>Personalized Daily Layout</h4>
                </div>
                <ul className="include-details">
                  <li>Custom daily routine designed around your poker schedule.</li>
                  <li>Focus on time management, productivity, and balance.</li>
                </ul>
              </div>

              <div className="include-item">
                <div className="include-header">
                  <span className="checkmark">✅</span>
                  <h4>Tailored Fitness Program</h4>
                </div>
                <ul className="include-details">
                  <li>Training plan built for your current fitness level and goals.</li>
                  <li>Focused on improving poker endurance, physical strength, and overall health.</li>
                </ul>
              </div>

              <div className="include-item">
                <div className="include-header">
                  <span className="checkmark">✅</span>
                  <h4>Nutrition Guide</h4>
                </div>
                <ul className="include-details">
                  <li>Practical nutrition strategies to support health, performance, and recovery.</li>
                </ul>
              </div>
            </div>

            <div className="program-results">
              <h3>Expected Results</h3>
              <p>By the end of 4 weeks, you'll have:</p>
              <ul className="results-list">
                <li>A clear and effective daily routine</li>
                <li>Improved energy and focus at the tables</li>
                <li>A stronger, more confident mindset</li>
                <li>Physical habits that support endurance and overall health</li>
                <li>The foundation for long-term poker performance</li>
              </ul>
            </div>

            <div className="program-cta">
              <p className="cta-text">Ready to start performing like an athlete at the tables?</p>
              <button
                className="cta-button"
                onClick={() => window.open("https://forms.google.com/your-intake-form", "_blank")}
              >
                APPLY FOR COACHING
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ABOUT ME PAGE
function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="page-hero-content">
          <h1>ABOUT ME</h1>
        </div>
      </section>

      <section className="about-section">
        <div className="content-container about-container">
          <div className="about-content">
            <div className="about-photo-container">
              <img src="/tim.png" alt="Tim - Poker Performance Coach" className="about-photo" />
            </div>

            <div className="about-intro">
              <p className="about-text">
                Hi, my name is <strong>Tim</strong>, I'm 26 years old, and my passion is poker. I've been playing
                competitively for the past two years — and it's become so much more than just a game to me.
              </p>
            </div>

            <p className="about-text">
              Before discovering poker, I spent my entire life playing football, competing professionally for five years
              from age 19 to 24. Unfortunately, a severe ankle injury brought that chapter to an end — and with it, the
              competitive lifestyle that had shaped me for so long.
            </p>

            <p className="about-text">
              Transitioning into poker gave me a second chance to channel that same drive for performance, growth, and
              excellence. I quickly realized how much of what I learned in professional sports translates directly to
              poker: discipline, focus, structure, recovery, and constant self-improvement.
            </p>

            <p className="about-text">
              Poker brought me back into a high-performance environment, where mindset and preparation matter just as
              much as skill. I'm incredibly grateful for that.
            </p>

            <p className="about-text final-paragraph">
              Alongside building my own poker career and steadily moving up in stakes, I decided to start coaching — to
              share what I've learned from both worlds. Having experienced the demands of professional sports and the
              mental challenges of poker, I'm passionate about helping players develop the structure, habits, and
              mindset to perform at their best — both at and away from the tables.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
