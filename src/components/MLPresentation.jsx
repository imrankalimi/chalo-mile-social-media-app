import React, { useState } from 'react';
import './MLPresentation.css';

const MLPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: 'title',
      title: 'Machine Learning',
      subtitle: 'An Introduction to Intelligent Systems',
      footer: 'November 2025'
    },
    // Slide 2: Introduction
    {
      type: 'content',
      title: 'Introduction',
      content: [
        'Machine Learning is revolutionizing technology',
        'Enables computers to learn from data without explicit programming',
        'Powers modern applications from recommendations to autonomous vehicles',
        'A subset of Artificial Intelligence focused on pattern recognition'
      ]
    },
    // Slide 3: What is Machine Learning?
    {
      type: 'content',
      title: 'What is Machine Learning?',
      content: [
        'Definition: A method of data analysis that automates analytical model building',
        'Uses algorithms that iteratively learn from data',
        'Allows computers to find hidden insights without being explicitly programmed',
        'Improves automatically through experience'
      ]
    },
    // Slide 4: Types of Machine Learning
    {
      type: 'content',
      title: 'Types of Machine Learning',
      content: [
        '1. Supervised Learning',
        '2. Unsupervised Learning',
        '3. Reinforcement Learning',
        '4. Semi-Supervised Learning'
      ]
    },
    // Slide 5: Supervised Learning
    {
      type: 'content',
      title: 'Supervised Learning',
      content: [
        'Learning from labeled training data',
        'Algorithm learns to map inputs to known outputs',
        'Examples: Classification and Regression',
        'Use Cases: Email spam detection, price prediction, image recognition'
      ]
    },
    // Slide 6: Unsupervised Learning
    {
      type: 'content',
      title: 'Unsupervised Learning',
      content: [
        'Learning from unlabeled data',
        'Algorithm finds hidden patterns or structures',
        'Examples: Clustering and Dimensionality Reduction',
        'Use Cases: Customer segmentation, anomaly detection, recommendation systems'
      ]
    },
    // Slide 7: Reinforcement Learning
    {
      type: 'content',
      title: 'Reinforcement Learning',
      content: [
        'Learning through interaction with environment',
        'Agent learns to make decisions by receiving rewards or penalties',
        'Goal: Maximize cumulative reward',
        'Use Cases: Game playing, robotics, autonomous vehicles, resource management'
      ]
    },
    // Slide 8: Key Concepts
    {
      type: 'content',
      title: 'Key Concepts in Machine Learning',
      content: [
        'Training Data: Dataset used to train the model',
        'Features: Input variables used for predictions',
        'Model: Mathematical representation of patterns',
        'Overfitting: Model performs well on training but poorly on new data',
        'Underfitting: Model is too simple to capture patterns'
      ]
    },
    // Slide 9: ML Workflow
    {
      type: 'content',
      title: 'Machine Learning Workflow',
      content: [
        '1. Data Collection: Gather relevant data',
        '2. Data Preprocessing: Clean and prepare data',
        '3. Feature Engineering: Select and transform features',
        '4. Model Selection: Choose appropriate algorithm',
        '5. Training: Fit model to training data',
        '6. Evaluation: Test model performance',
        '7. Deployment: Implement in production'
      ]
    },
    // Slide 10: Popular Algorithms
    {
      type: 'content',
      title: 'Popular ML Algorithms',
      content: [
        'Linear Regression: Predicting continuous values',
        'Logistic Regression: Binary classification',
        'Decision Trees: Rule-based predictions',
        'Random Forest: Ensemble of decision trees',
        'Support Vector Machines (SVM): Classification with optimal boundaries',
        'Neural Networks: Deep learning for complex patterns',
        'K-Means: Clustering algorithm'
      ]
    },
    // Slide 11: Applications
    {
      type: 'content',
      title: 'Real-World Applications',
      content: [
        'Healthcare: Disease diagnosis, drug discovery',
        'Finance: Fraud detection, algorithmic trading',
        'E-commerce: Product recommendations, demand forecasting',
        'Transportation: Autonomous vehicles, route optimization',
        'Entertainment: Content recommendations, personalization',
        'Manufacturing: Predictive maintenance, quality control'
      ]
    },
    // Slide 12: Tools & Frameworks
    {
      type: 'content',
      title: 'Tools & Frameworks',
      content: [
        'Python: Primary programming language for ML',
        'TensorFlow: Open-source deep learning framework',
        'PyTorch: Dynamic neural network framework',
        'Scikit-learn: Classical ML algorithms library',
        'Keras: High-level neural networks API',
        'Pandas & NumPy: Data manipulation libraries',
        'Jupyter Notebooks: Interactive development environment'
      ]
    },
    // Slide 13: Challenges
    {
      type: 'content',
      title: 'Challenges in Machine Learning',
      content: [
        'Data Quality: Incomplete or biased data affects performance',
        'Computational Resources: Training requires significant computing power',
        'Interpretability: Complex models are difficult to explain',
        'Privacy & Security: Protecting sensitive data',
        'Ethical Concerns: Bias, fairness, and accountability',
        'Generalization: Ensuring models work on new data'
      ]
    },
    // Slide 14: Future of ML
    {
      type: 'content',
      title: 'Future of Machine Learning',
      content: [
        'AutoML: Automated machine learning for non-experts',
        'Edge AI: ML models running on edge devices',
        'Explainable AI: Making models more interpretable',
        'Federated Learning: Training on decentralized data',
        'Quantum Machine Learning: Leveraging quantum computing',
        'Integration with IoT, 5G, and emerging technologies'
      ]
    },
    // Slide 15: Thank You
    {
      type: 'thankyou',
      title: 'Thank You',
      subtitle: 'Questions?',
      footer: 'Machine Learning Presentation'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderSlide = (slide) => {
    if (slide.type === 'title' || slide.type === 'thankyou') {
      return (
        <div className="slide-title">
          <div className="title-content">
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            {slide.footer && <p className="slide-footer">{slide.footer}</p>}
          </div>
        </div>
      );
    }

    if (slide.type === 'content') {
      return (
        <div className="slide-content">
          <h2>{slide.title}</h2>
          <ul>
            {slide.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="presentation-container">
      <div className="slide-wrapper">
        <div className="slide">
          {renderSlide(slides[currentSlide])}
        </div>
      </div>

      <div className="controls">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="nav-button"
        >
          ← Previous
        </button>
        
        <div className="slide-indicator">
          <span className="slide-number">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="slide-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="nav-button"
        >
          Next →
        </button>
      </div>

      <div className="keyboard-hint">
        Use arrow keys ← → to navigate
      </div>
    </div>
  );
};

export default MLPresentation;
