import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowLeft,
  Clock,
  MessageSquare,
} from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();

  // Formspree hook (your provided form ID)
  const [formState, handleFormspreeSubmit] = useForm('mvgdypne');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    medicalCondition: '',
    urgency: 'normal',
    message: '',
    preferredContact: 'email',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Combined submit: submits via Formspree and keeps your existing behavior
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Let Formspree read the form element's inputs (we use the event directly)
    // preventDefault is handled by Formspree's handler in the example pattern,
    // but we call preventDefault here to control the flow and then pass the event.
    e.preventDefault();

    // Submit to Formspree (pass the native event). This follows the example usage.
    // Note: handleFormspreeSubmit may update formState asynchronously.
    await handleFormspreeSubmit(e as any);

    console.log('Enquiry submitted:', formData);

    // If submission succeeded, show an alert (and you also render a success UI below).
    if (formState.succeeded) {
      // keep the alert (optional)
      alert(
        'Thank you for your enquiry! Our medical travel specialists will contact you within 24 hours.',
      );
    }
  };

  // Show success UI if Formspree reports success
  if (formState.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-2xl bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thanks — we received your enquiry
          </h2>
          <p className="text-gray-600 mb-6">
            Our medical travel specialists will contact you within 24 hours.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your medical journey? Our specialists are here to help you every step of the way.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support Hotline</h3>
                  <p className="text-gray-600">+91 9530102585 </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Support</h3>
                  <p className="text-gray-600">medivoyagehealthcare@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Network</h3>
                  <p className="text-gray-600">Serving patients worldwide</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Emergency Medical Travel</h3>
              <p className="text-gray-600 mb-4">
                For urgent medical situations requiring immediate travel arrangements, call our emergency hotline.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Hotline: +1 (555) 911-HELP
              </button>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Medical Travel Enquiry</h2>
            </div>

            {/* Use the same form element so Formspree can read fields when we pass the submit event */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country/Region *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Nigeria, UAE, Kenya"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical Condition/Treatment Needed *</label>
                <input
                  type="text"
                  name="medicalCondition"
                  value={formData.medicalCondition}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Cardiac surgery, Cancer treatment, Orthopedic surgery"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="normal">Normal (1-3 months)</option>
                    <option value="urgent">Urgent (2-4 weeks)</option>
                    <option value="emergency">Emergency (ASAP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide any additional details about your medical condition, preferred destinations, budget considerations, or specific questions..."
                />
                <ValidationError prefix="Message" field="message" errors={formState.errors} />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>What happens next?</strong>
                  <br />
                  1. Our medical specialists will review your enquiry and Contact you shortly.
                  <br />
                  2. Receive a free second opinion and treatment plan
                  <br />
                  3. Get assistance with travel arrangements and hospital bookings
                </p>
              </div>

              <button
                type="submit"
                disabled={formState.submitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-60"
              >
                <Send className="mr-2 h-5 w-5" />
                {formState.submitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
