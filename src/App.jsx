import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [selectedFeature, setSelectedFeature] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const features = [
    {
      id: "ai-coach",
      title: "AI Coach Contact",
      description: "Chat with your AI coach like a real person via saved contact"
    },
    {
      id: "weekly-summaries",
      title: "Weekly Summaries",
      description: "Get personalized insights from your sleep, steps, and habits"
    },
    {
      id: "trend-analysis",
      title: "Trend Analysis",
      description: "Track patterns and see how your health metrics change over time"
    },
    {
      id: "customizable-ui",
      title: "Customizable UI",
      description: "Fully customize your app experience to match your preferences"
    },
    {
      id: "real-time-sync",
      title: "Real-time Sync",
      description: "Secure cloud accounts with seamless syncing across devices"
    },
    {
      id: "proactive-nudges",
      title: "Proactive Nudges",
      description: "Receive helpful reminders and suggestions throughout your day"
    }
  ];

  const handleEarlyAccessClick = (e) => {
    e.preventDefault();
    if (formData.email) {
      setShowSurvey(true);
    }
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    if (!selectedFeature) {
      alert("Please select a feature you're most interested in.");
      return;
    }

    // Submit to Formspree with all data
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formspree.io/f/manrpqwb";
    
    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = "name";
    nameInput.value = formData.name;
    
    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "email";
    emailInput.value = formData.email;
    
    const featureInput = document.createElement("input");
    featureInput.type = "hidden";
    featureInput.name = "selected_feature";
    featureInput.value = selectedFeature;
    
    const sourceInput = document.createElement("input");
    sourceInput.type = "hidden";
    sourceInput.name = "source";
    sourceInput.value = "landing_waitlist_survey";
    
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(featureInput);
    form.appendChild(sourceInput);
    document.body.appendChild(form);
    form.submit();
    
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="app">
        <div className="success-container">
          <div className="success-icon">✓</div>
          <h1>Thank You!</h1>
          <p className="success-message">
            We've received your information. Check your email for confirmation and next steps.
          </p>
          <p className="success-submessage">
            We'll be in touch soon to schedule a quick 5-minute interview to learn more about how CoreSense can help you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {showSurvey ? (
        <div className="survey-overlay" onClick={() => setShowSurvey(false)}>
          <div className="survey-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowSurvey(false)}>×</button>
            <h2>Which feature interests you most?</h2>
            <p className="survey-subtitle">Help us prioritize what to build first</p>
            <form onSubmit={handleSurveySubmit} className="survey-form">
              <div className="feature-grid">
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className={`feature-card ${selectedFeature === feature.id ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="feature"
                      value={feature.id}
                      checked={selectedFeature === feature.id}
                      onChange={(e) => setSelectedFeature(e.target.value)}
                    />
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </label>
                ))}
              </div>
              <button type="submit" className="submit-survey-button">
                Reserve My Spot
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <header className="header">
        <div className="container">
          <div className="logo">CoreSense</div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#waitlist">Join Waitlist</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Your AI Life Coach for
                <span className="gradient-text"> Health & Habits</span>
              </h1>
              <p className="hero-description">
                CoreSense is a personal health and productivity companion that uses AI to deliver daily insights based on real user data. Connect to Apple Health and supported wearables to track sleep, steps, activity, and habits, then receive personalized recommendations to improve your wellbeing and performance.
              </p>
              <div className="hero-cta">
                <a href="#waitlist" className="cta-primary">
                  Get Early Access
                </a>
                <a href="#features" className="cta-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Why CoreSense?</h2>
            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">📊</div>
                <h3>Real Data</h3>
                <p>Connect Apple Health & wearables to surface honest trends from your actual activity.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🤖</div>
                <h3>AI Coach</h3>
                <p>Your AI coach lives as a saved contact — interact like a real person, get proactive nudges, and receive personalized coaching throughout your day.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🔒</div>
                <h3>Privacy First</h3>
                <p>Your data stays private with secure cloud accounts and opt-in syncing. We respect your privacy.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">📈</div>
                <h3>Weekly Summaries</h3>
                <p>Get personalized weekly insights and trend analysis based on your sleep, steps, and habits.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🎨</div>
                <h3>Fully Customizable</h3>
                <p>Customize your UI settings to match your preferences and create the perfect experience for you.</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">⚡</div>
                <h3>Real-time Sync</h3>
                <p>Seamless syncing across all your devices with a smooth, modern React Native experience.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="waitlist">
          <div className="container">
            <div className="waitlist-content">
              <h2 className="section-title">Join the Waitlist</h2>
              <p className="waitlist-description">
                Sign up to get early access and reserve your username. We'll send you a confirmation email and follow up with a quick survey.
              </p>
              <form
                onSubmit={handleEarlyAccessClick}
                className="waitlist-form"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name (optional)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <button type="submit" className="cta-primary large">
                  Get Early Access
                </button>
              </form>
              <p className="form-note">
                By signing up, you'll receive a confirmation email and we'll follow up asking for a quick 5-minute interview to learn how CoreSense can best serve you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Built with ❤️ by Tosin • Join the waitlist for early access</p>
        </div>
      </footer>
    </div>
  );
}
