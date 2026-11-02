import React from 'react';

const EXPERIENCE = [
  {
    role: 'Senior Associate — Projects',
    company: 'Cognizant · Client: Google',
    period: 'Apr 2026 — Present',
    description:
      'Tech lead for an AI-enabled operations platform. Built agentic tool calling with Google ADK and Gemini 2.5 Pro, sub-500 ms streaming, Vertex AI resiliency and DLP guardrails, and a risk-detection service that cut false positives from ~35% to under 10%.'
  },
  {
    role: 'Senior Manager — Data & Analytics',
    company: 'WPP Media',
    period: 'Sep 2025 — Mar 2026',
    description:
      'Optimized XGBoost campaign forecasting for multi-day ad performance, automated ops workflows saving 240+ hours a year, and shipped a fully local LangGraph multi-agent copilot for plain-English campaign analytics.'
  },
  {
    role: 'System Engineer (AI/ML)',
    company: 'Tata Consultancy Services · Client: Ericsson',
    period: 'Mar 2022 — Aug 2025',
    description:
      'Built ARIMA/Prophet forecasting served to 50,000+ business users, automated ML pipelines on Jenkins that cut manual intervention by 80%, and exposed prediction services through Flask APIs. TCS Star of the Month.'
  },
  {
    role: 'Data Scientist',
    company: 'KernelSphere Technologies',
    period: 'Jan 2021 — Feb 2022',
    description:
      'Engineered LSTM, Prophet and XGBoost forex forecasting on 30GB+ of historical data, deployed real-time APIs on AWS SageMaker and served paying clients through a Django app on EC2. Built PDF-to-structured-data NLP models at 80% accuracy.'
  },
  {
    role: 'Machine Learning Engineer',
    company: 'KernelSphere Technologies',
    period: 'Jun 2019 — Jan 2021',
    description:
      'Built healthcare disease-classification models at 90% accuracy and CNN/R-CNN/YOLOv3 detectors for civil engineering drawings, then mapped extracted blueprint data into a GraphQL database for enterprise-scale retrieval.'
  }
];

const SKILLS = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'LangChain',
  'LangGraph',
  'FastAPI',
  'AWS',
  'GCP',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'BigQuery'
];

export default function About() {
  return (
    <div className="main-wrap" id="about">
      <header className="section default-header about-header">
        <div className="container medium">
          <div className="row">
            <div className="flex-col once-in">
              <h1><span>Engineering AI systems</span><span>that ship and scale</span></h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section no-padding line-globe once-in">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <div className="digital-ball">
                <div className="overlay"></div>
                <div className="globe">
                  <div className="globe-wrap">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle-hor"></div>
                    <div className="circle-hor-middle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-image once-in">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <div className="arrow">
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>arrow-up-right</title>
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-1019.000000, -279.000000)" stroke="currentColor" strokeWidth="1.5">
                      <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                        <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                        <line x1="12" y1="0" x2="0" y2="12"></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <p>
                I help companies and engineering teams design, build and deploy tailor-made AI solutions — from data pipelines and model training to production APIs and cloud infrastructure. Across 7 years I've delivered ML at enterprise scale (Ericsson, WPP, Google via Cognizant) and at startup speed, always putting quality and performance first.
              </p>
              <p>
                <span style={{ opacity: 0.5, display: 'block', paddingTop: '0.5em' }}>
                  Always exploring<span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span>
                </span>
              </p>
            </div>
            <div className="flex-col">
              <div className="single-about-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/about-portrait.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-services">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>I can help you with <span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <h5>01</h5>
              <div className="stripe"></div>
              <h4>Machine Learning</h4>
              <p>Time-series forecasting, deep learning and computer vision in production: ARIMA, Prophet, XGBoost, LSTMs, CNNs and YOLO, backed by automated training and evaluation pipelines.</p>
            </div>
            <div className="flex-col">
              <h5>02</h5>
              <div className="stripe"></div>
              <h4>LLMs &amp; GenAI</h4>
              <p>Agentic workflows, RAG and multimodal applications built with LangChain, LangGraph, Gemini and local models — from tool calling and structured outputs to privacy-first deployment.</p>
            </div>
            <div className="flex-col">
              <h5>03</h5>
              <div className="stripe"></div>
              <h4>The full package</h4>
              <p>End-to-end delivery: Python and FastAPI services, React and Next.js front-ends, and cloud infrastructure on AWS and GCP with Docker, Kubernetes and CI/CD.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-experience">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>Experience</h2>
            </div>
          </div>
          <ul className="experience-list">
            {EXPERIENCE.map((job) => (
              <li key={`${job.role}-${job.period}`} className="experience-item">
                <div className="stripe"></div>
                <div className="experience-head">
                  <div className="experience-role">
                    <h4>{job.role}</h4>
                    <h5>{job.company}</h5>
                  </div>
                  <p className="experience-period">{job.period}</p>
                </div>
                <p className="experience-description">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-awwwards">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="single-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/avatar.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="flex-col">
              <div className="awwwards-badge"></div>
              <h2>Education &amp;<br />Background</h2>
              <p>Senior AI/ML Engineer based in Mumbai, India, with 7 years of experience building production machine learning pipelines, agentic LLM workflows and intelligent software systems. Published researcher and guest lecturer on AI and IoT.</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <h5>Master's</h5>
                  <h4>M.Eng, Information Technology</h4>
                  <p>University of Mumbai · 2021</p>
                </div>
                <div className="credential-item">
                  <h5>Bachelor's</h5>
                  <h4>B.E., Computer Engineering</h4>
                  <p>University of Mumbai · 2017</p>
                </div>
                <div className="credential-item">
                  <h5>Core Competencies</h5>
                  <div className="credential-tags">
                    {SKILLS.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="btn btn-normal resume-btn">
                <a
                  href="/assets/Ammar_Fitwalla_Resume.pdf"
                  download="Ammar_Fitwalla_Resume.pdf"
                  className="btn-click magnetic"
                  data-strength="25"
                  data-strength-text="15"
                >
                  <div className="btn-fill"></div>
                  <span className="btn-text">
                    <span className="btn-text-inner change">Download CV</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
