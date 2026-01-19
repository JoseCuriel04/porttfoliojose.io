import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');
    setError('');

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
        setSuccess(t('Message sent successfully! I will contact you soon.'));
        e.currentTarget.reset();
      } else {
        throw new Error('Error sending message');
      }
    } catch (err) {
      setError(t('There was an error sending the message. Please try again or send an email directly to joselcl04@gmail.com'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h5>{t("Contact")}</h5>
            <h2>{t("Let's Work Together")}</h2>
          </div>

          {success && <div className="alert success">{success}</div>}
          {error && <div className="alert error">{error}</div>}

          <form className="contact-form" onSubmit={handleSubmit}>
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
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/527752026535?text=Hola%20José%20Luis,%20me%20gustaría%20contactarte%20desde%20tu%20portafolio"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-button"
        aria-label={t("Contact me on WhatsApp")}
      >
        <FaWhatsapp className="whatsapp-float-icon" />
        <span className="whatsapp-tooltip">{t("Contact me on WhatsApp")}</span>
      </a>

    </>
  );
};
