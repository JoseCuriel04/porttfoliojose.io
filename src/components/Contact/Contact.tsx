import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // 'success' o 'error'
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Limpiar mensajes previos
    setMessage({ text: '', type: '' });

    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/joselcl04@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setMessage({
          text: t('Message sent successfully! I will contact you soon.'),
          type: 'success'
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error('Error sending message');
      }
    } catch (err) {
      setMessage({
        text: t('There was an error sending the message. Please try again or send an email directly to joselcl04@gmail.com'),
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h5>{t("Contact")}</h5>
          <h2>{t("Let's Work Together")}</h2>
        </div>

        {message.text && (
          <div className={`alert ${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group">
            <input type="text" name="name" placeholder={t("Your Name")} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder={t("Your Email")} required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder={t("Subject")} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder={t("Your Message")} required></textarea>
          </div>
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? <span className="loading"></span> : t("Send Message")}
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/jose-luis-curiel-lopez-8b0932374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:joselcl04@gmail.com">joselcl04@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
