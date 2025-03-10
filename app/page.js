import Sidebar from './components/layout/Sidebar';
import Navigation from './components/layout/Navigation';
import ProfileSection from './components/profile/ProfileSection';
import SocialLinks from './components/social/SocialLinks';
import Introduction from './components/content/Introduction';
import WritingSection from './components/content/WritingSection';

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar-section">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navigation />
        <Introduction />
        <ProfileSection />
        <WritingSection />
        <SocialLinks />
      </div>
    </div>
  );
} 