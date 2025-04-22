const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-red-600 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to Emergency 360! We are dedicated to providing fast and
        reliable emergency ambulance services at your fingertips. Our mission is
        to ensure that everyone has access to life-saving services during
        critical moments.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to bridge the gap between emergencies and timely medical
        assistance. We aim to provide a seamless experience for users to request
        ambulances and receive help as quickly as possible.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Why Choose Us?
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>24/7 emergency ambulance services.</li>
        <li>Real-time tracking of ambulances.</li>
        <li>Experienced and trained medical staff.</li>
        <li>Fast response times to critical situations.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
      <p className="text-lg text-gray-700">
        If you have any questions or need assistance, feel free to reach out to
        us:
      </p>
      <p className="text-lg text-gray-700">
        <strong>Email:</strong> support@emergency360.com
      </p>
      <p className="text-lg text-gray-700">
        <strong>Phone:</strong> +1-800-EMERGENCY
      </p>
    </div>
  );
};

export default AboutUs;
