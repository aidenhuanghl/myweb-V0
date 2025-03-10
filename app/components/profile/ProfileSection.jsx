import React from 'react';

const ProfileSection = () => {
  return (
    <section className="profile-section" id="about">
      <div className="profile-container">
        <div className="profile-image">
          {/* Placeholder for profile image */}
          <div className="image-placeholder">Profile Image</div>
        </div>
        <div className="profile-info">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam auctor, nisl nec ultricies aliquet, nunc nisl aliquam nunc, 
            vitae aliquam nisl nunc vitae nisl.
          </p>
          <p>
            Sed euismod, nisl nec ultricies aliquet, nunc nisl aliquam nunc,
            vitae aliquam nisl nunc vitae nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection; 