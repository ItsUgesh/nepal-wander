'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just show success message
    setSubmitted(true);
  };

  return (
    <main className={styles.main}>

      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Get in Touch</p>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.sub}>
          Have a question about a trek, destination, or booking? We'd love to hear from you.
        </p>
      </div>

      <div className={styles.contentWrap}>

        {/* Contact info */}
        <div className={styles.info}>
          {[
            { icon: '📍', label: 'Address',  value: 'Berlin, Germany' },
            { icon: '📧', label: 'Email',    value: 'Ugeshsimkhada@gmail.com'    },
            { icon: '📞', label: 'Phone',    value: '+49 15510367148'          },
            { icon: '🕐', label: 'Hours',    value: 'Mon–Sat, 9am–18pm GST'    },
          ].map((item) => (
            <div key={item.label} className={styles.infoItem}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div>
                <p className={styles.infoLabel}>{item.label}</p>
                <p className={styles.infoValue}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us more..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}