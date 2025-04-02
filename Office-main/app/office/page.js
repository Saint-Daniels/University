'use client';

import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Form, Table, Nav, Tab, Badge, Modal } from 'react-bootstrap';
import { 
  FaUser, FaEnvelope, FaCalendar, FaChartLine, FaUsers, 
  FaBuilding, FaBook, FaTasks, FaComments, FaFileAlt, 
  FaUserPlus, FaSearch, FaFilter, FaDownload, FaUpload, FaVideo,
  FaSms, FaGoogle, FaHistory, FaClock, FaMapMarkerAlt, FaLink, FaHome, FaRobot,
  FaCloud, FaCog, FaChartBar, FaCircle, FaPlus, FaTimes, FaCoffee, FaRestroom, FaUtensils, FaGraduationCap,
  FaGoogleDrive, FaFolder, FaStar, FaEllipsisV, FaHashtag, FaPaperPlane,
  FaFileExcel, FaFilePowerpoint, FaFilePdf, FaFileWord, FaUserFriends,
  FaSignOutAlt, FaBell, FaUserCircle, FaCamera, FaShieldAlt, FaKey, FaVolumeUp,
  FaDesktop, FaMobile, FaTablet, FaBellSlash, FaUserShield, FaUserCog,
  FaEdit, FaPalette, FaTrash, FaExchangeAlt, FaBookReader, FaChalkboardTeacher,
  FaMicroscope, FaFlask, FaCalculator, FaLaptopCode, FaLanguage, FaMusic,
  FaPaintBrush, FaDumbbell, FaTheaterMasks, FaHandshake, FaPhone
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function UniversityKnowledgeCenter() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStudent, setIsStudent] = useState(false);
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  const [studentNotes, setStudentNotes] = useState('');
  const [userRole, setUserRole] = useState('active');
  const [dispositionNotes, setDispositionNotes] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    desktop: true,
    mobile: true,
    tablet: true
  });
  
  // Add state for active/focused input field
  const [activeInputField, setActiveInputField] = useState('studentId');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [gpa, setGpa] = useState('');
  const [courses, setCourses] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [grades, setGrades] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'en',
    notifications: true,
    accessibility: true
  });
  
  useEffect(() => {
    setIsStudent(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time helper function
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Enhanced client data
  const students = [
    {
      name: "John Doe",
      position: "CEO",
      company: "Acme Corp",
      phone: "(555) 123-4567",
      email: "john@example.com",
      address: "123 Business Ave, New York, NY 10001",
      location: "New York, NY",
      status: "Active",
      lastContact: "2 hours ago",
      occupation: "Executive Management",
      industry: "Technology",
      notes: "Key decision maker, interested in enterprise solutions",
      tags: ["VIP", "Enterprise", "Tech"],
      history: [
        {
          type: "call",
          title: "Initial Sales Call",
          description: "Discussed product features and pricing",
          date: "2 hours ago",
          duration: "45 minutes",
          outcome: "Positive"
        },
        {
          type: "email",
          title: "Follow-up Email",
          description: "Sent product brochure and pricing details",
          date: "1 day ago",
          status: "Opened"
        }
      ]
    },
    {
      name: "Jane Smith",
      position: "CTO",
      company: "Tech Solutions",
      phone: "(555) 987-6543",
      email: "jane@example.com",
      address: "456 Innovation Blvd, San Francisco, CA 94105",
      location: "San Francisco, CA",
      status: "Pending",
      lastContact: "1 day ago",
      occupation: "Technical Leadership",
      industry: "Software",
      notes: "Technical background, needs detailed specifications",
      tags: ["Technical", "Enterprise", "Software"],
      history: [
        {
          type: "meeting",
          title: "Product Demo",
          description: "Demonstrated new features to the team",
          date: "1 day ago",
          duration: "1 hour",
          outcome: "Very Interested"
        }
      ]
    },
    {
      name: "Mike Johnson",
      position: "Sales Director",
      company: "Global Sales",
      phone: "(555) 456-7890",
      email: "mike@example.com",
      address: "789 Market St, Chicago, IL 60601",
      location: "Chicago, IL",
      status: "Active",
      lastContact: "3 hours ago",
      occupation: "Sales Management",
      industry: "Consulting",
      notes: "Looking for sales automation solutions",
      tags: ["Sales", "Mid-Market", "Consulting"],
      history: [
        {
          type: "call",
          title: "Contract Discussion",
          description: "Reviewed contract terms and conditions",
          date: "3 hours ago",
          duration: "30 minutes",
          outcome: "Needs Follow-up"
        }
      ]
    }
  ];

  // Add office suite apps data
  const officeApps = [
    {
      name: "Email",
      icon: <FaEnvelope size={32} />,
      color: "#EA4335",
      description: "Access your email inbox",
      link: "#"
    },
    {
      name: "Calendar",
      icon: <FaCalendar size={32} />,
      color: "#4285F4",
      description: "View and manage your schedule",
      link: "#"
    },
    {
      name: "Drive",
      icon: <FaFileAlt size={32} />,
      color: "#34A853",
      description: "Access your files and documents",
      link: "#"
    },
    {
      name: "Meet",
      icon: <FaVideo size={32} />,
      color: "#00832D",
      description: "Start or join video meetings",
      link: "#"
    },
    {
      name: "Chat",
      icon: <FaComments size={32} />,
      color: "#00AC47",
      description: "Communicate with your team",
      link: "#"
    },
    {
      name: "AI Assistant",
      icon: <FaRobot size={32} />,
      color: "#FF6D00",
      description: "Get AI-powered assistance",
      link: "#"
    }
  ];

  const apps = [
    {
      id: 1,
      name: 'Email',
      icon: <FaEnvelope size={32} />,
      color: '#EA4335',
      link: '/office/email'
    },
    {
      id: 2,
      name: 'Dialer',
      icon: <FaPhone size={32} />,
      color: '#34A853',
      link: '/office/dialer'
    },
    {
      id: 3,
      name: 'Calendar',
      icon: <FaCalendar size={32} />,
      color: '#4285F4',
      link: '/office/calendar'
    },
    {
      id: 4,
      name: 'Meet',
      icon: <FaVideo size={32} />,
      color: '#00832D',
      link: '/office/meet'
    },
    {
      id: 5,
      name: 'Drive',
      icon: <FaCloud size={32} />,
      color: '#FBBC05',
      link: '/office/drive'
    },
    {
      id: 6,
      name: 'Chat',
      icon: <FaComments size={32} />,
      color: '#00AC47',
      link: '/office/chat'
    },
    {
      id: 7,
      name: 'AI Assistant',
      icon: <FaRobot size={32} />,
      color: '#FF6D00',
      link: '/office/ai'
    },
    {
      id: 8,
      name: 'Tasks',
      icon: <FaTasks size={32} />,
      color: '#9C27B0',
      link: '/office/tasks'
    },
    {
      id: 9,
      name: 'Analytics',
      icon: <FaChartBar size={32} />,
      color: '#1976D2',
      link: '/office/analytics'
    },
    {
      id: 10,
      name: 'Settings',
      icon: <FaCog size={32} />,
      color: '#607D8B',
      link: '/office/settings'
    }
  ];

  // Sample data for previews
  const recentEmails = [
    { from: 'John Doe', subject: 'Project Update', preview: 'Here are the latest updates...', time: '2h ago', unread: true },
    { from: 'Jane Smith', subject: 'Meeting Notes', preview: 'Please review the notes...', time: '4h ago', unread: true },
    { from: 'Mike Johnson', subject: 'Document Review', preview: 'Can you check this...', time: '1d ago', unread: false }
  ];

  const upcomingMeetings = [
    { 
      title: 'Team Standup', 
      time: new Date(new Date().setHours(10, 0)), 
      participants: 5,
      type: 'video'
    },
    { 
      title: 'Client Meeting', 
      time: new Date(new Date().setHours(14, 0)), 
      participants: 3,
      type: 'in-person'
    },
    { 
      title: 'Project Review', 
      time: new Date(new Date().setHours(16, 0)), 
      participants: 8,
      type: 'video'
    }
  ];

  const recentTasks = [
    { 
      title: 'Review Project Proposal', 
      due: new Date(), 
      priority: 'high',
      status: 'in-progress',
      progress: 60,
      assignee: 'John Doe'
    },
    { 
      title: 'Send Meeting Notes', 
      due: new Date(new Date().setDate(new Date().getDate() + 1)), 
      priority: 'medium',
      status: 'pending',
      progress: 0,
      assignee: 'Jane Smith'
    },
    { 
      title: 'Update Documentation', 
      due: new Date(new Date().setDate(new Date().getDate() + 7)), 
      priority: 'low',
      status: 'pending',
      progress: 30,
      assignee: 'Mike Johnson'
    }
  ];

  const recentChats = [
    { name: 'Marketing Team', lastMessage: 'Can you review this?', time: '5m ago', unread: true },
    { name: 'Development Team', lastMessage: 'Build is ready', time: '1h ago', unread: false },
    { name: 'Design Team', lastMessage: 'New mockups uploaded', time: '2h ago', unread: true }
  ];

  // Add dispositions data
  const dispositions = [
    { id: 'active', label: 'Active', color: 'success', icon: <FaPhone /> },
    { id: 'break', label: 'On Break', color: 'warning', icon: <FaCoffee /> },
    { id: 'bathroom', label: 'Bathroom', color: 'info', icon: <FaRestroom /> },
    { id: 'lunch', label: 'Lunch Break', color: 'warning', icon: <FaUtensils /> },
    { id: 'notes', label: 'Entering Notes', color: 'primary', icon: <FaFileAlt /> },
    { id: 'training', label: 'Training', color: 'secondary', icon: <FaGraduationCap /> },
    { id: 'meeting', label: 'In Meeting', color: 'info', icon: <FaUsers /> }
  ];

  const handleCall = (phoneNumber) => {
    if (!phoneNumber) return;
    setIsCallActive(true);
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setCallDuration(0);
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setShowProfile(true);
  };

  const handleStartMeeting = (client) => {
    // Implement Google Meet integration
    window.open(`https://meet.google.com/new?email=${client.email}`, '_blank');
  };

  const handleSendSMS = (phone) => {
    // Implement SMS functionality
    window.open(`sms:${phone}`, '_blank');
  };

  const handleSendEmail = (email) => {
    // Implement email functionality
    window.open(`mailto:${email}`, '_blank');
  };

  const filteredClients = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.phone.includes(searchQuery)
  );

  // Get first day of month
  const firstDayOfMonth = new Date(2025, 2, 1);
  const startingDayIndex = firstDayOfMonth.getDay();
  
  // Generate calendar days array with empty slots for proper alignment
  const calendarDays = Array(startingDayIndex).fill(null).concat(
    Array.from({ length: 31 }, (_, i) => i + 1)
  );

  // Add search handler function
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle input from dialer pad
  const handleDialerInput = (value) => {
    switch(activeInputField) {
      case 'phoneNumber':
        setPhoneNumber(prev => prev + value);
        break;
      case 'firstName':
        setFirstName(prev => prev + value);
        break;
      case 'middleName':
        setMiddleName(prev => prev + value);
        break;
      case 'lastName':
        setLastName(prev => prev + value);
        break;
      case 'email':
        setEmail(prev => prev + value);
        break;
      case 'streetAddress':
        setStreetAddress(prev => prev + value);
        break;
      case 'apartment':
        setApartment(prev => prev + value);
        break;
      case 'city':
        setCity(prev => prev + value);
        break;
      case 'stateProvince':
        setStateProvince(prev => prev + value);
        break;
      case 'zipCode':
        setZipCode(prev => prev + value);
        break;
      case 'country':
        setCountry(prev => prev + value);
        break;
      default:
        setPhoneNumber(prev => prev + value);
    }
  };
  
  // Function to handle backspace from dialer pad
  const handleDialerBackspace = () => {
    switch(activeInputField) {
      case 'phoneNumber':
        setPhoneNumber(prev => prev.slice(0, -1));
        break;
      case 'firstName':
        setFirstName(prev => prev.slice(0, -1));
        break;
      case 'middleName':
        setMiddleName(prev => prev.slice(0, -1));
        break;
      case 'lastName':
        setLastName(prev => prev.slice(0, -1));
        break;
      case 'email':
        setEmail(prev => prev.slice(0, -1));
        break;
      case 'streetAddress':
        setStreetAddress(prev => prev.slice(0, -1));
        break;
      case 'apartment':
        setApartment(prev => prev.slice(0, -1));
        break;
      case 'city':
        setCity(prev => prev.slice(0, -1));
        break;
      case 'stateProvince':
        setStateProvince(prev => prev.slice(0, -1));
        break;
      case 'zipCode':
        setZipCode(prev => prev.slice(0, -1));
        break;
      case 'country':
        setCountry(prev => prev.slice(0, -1));
        break;
      default:
        setPhoneNumber(prev => prev.slice(0, -1));
    }
  };
  
  // Function to clear the active input field
  const handleDialerClear = () => {
    switch(activeInputField) {
      case 'phoneNumber':
        setPhoneNumber('');
        break;
      case 'firstName':
        setFirstName('');
        break;
      case 'middleName':
        setMiddleName('');
        break;
      case 'lastName':
        setLastName('');
        break;
      case 'email':
        setEmail('');
        break;
      case 'streetAddress':
        setStreetAddress('');
        break;
      case 'apartment':
        setApartment('');
        break;
      case 'city':
        setCity('');
        break;
      case 'stateProvince':
        setStateProvince('');
        break;
      case 'zipCode':
        setZipCode('');
        break;
      case 'country':
        setCountry('');
        break;
      default:
        setPhoneNumber('');
    }
  };

  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        {/* Sidebar */}
        <Col md={3} lg={2} className="sidebar">
          <div className="sidebar-header">
            <FaGraduationCap size={24} className="me-2" />
            <h5 className="mb-0">University Knowledge Center</h5>
          </div>
          <Nav className="flex-column">
            <Nav.Link active={activeTab === 'home'} onClick={() => setActiveTab('home')}>
              <FaHome className="me-2" /> Dashboard
            </Nav.Link>
            <Nav.Link active={activeTab === 'courses'} onClick={() => setActiveTab('courses')}>
              <FaBook className="me-2" /> Courses
            </Nav.Link>
            <Nav.Link active={activeTab === 'assignments'} onClick={() => setActiveTab('assignments')}>
              <FaTasks className="me-2" /> Assignments
            </Nav.Link>
            <Nav.Link active={activeTab === 'grades'} onClick={() => setActiveTab('grades')}>
              <FaChartLine className="me-2" /> Grades
            </Nav.Link>
            <Nav.Link active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')}>
              <FaCalendar className="me-2" /> Schedule
            </Nav.Link>
            <Nav.Link active={activeTab === 'resources'} onClick={() => setActiveTab('resources')}>
              <FaFolder className="me-2" /> Resources
            </Nav.Link>
            <Nav.Link active={activeTab === 'messages'} onClick={() => setActiveTab('messages')}>
              <FaComments className="me-2" /> Messages
            </Nav.Link>
            <Nav.Link active={activeTab === 'events'} onClick={() => setActiveTab('events')}>
              <FaCalendar className="me-2" /> Events
            </Nav.Link>
            <Nav.Link active={activeTab === 'settings'} onClick={() => setActiveTab('settings')}>
              <FaCog className="me-2" /> Settings
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={9} lg={10} className="main-content">
          <div className="content-header">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">
                {activeTab === 'home' && 'Dashboard'}
                {activeTab === 'courses' && 'Courses'}
                {activeTab === 'assignments' && 'Assignments'}
                {activeTab === 'grades' && 'Grades'}
                {activeTab === 'schedule' && 'Schedule'}
                {activeTab === 'resources' && 'Resources'}
                {activeTab === 'messages' && 'Messages'}
                {activeTab === 'events' && 'Events'}
                {activeTab === 'settings' && 'Settings'}
              </h4>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Search courses, assignments, or resources..."
                  className="me-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-primary" className="me-2">
                  <FaBell className="me-2" /> Notifications
                </Button>
                <div className="profile-dropdown">
                  <Button variant="outline-secondary" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                    <FaUserCircle className="me-2" /> Profile
                  </Button>
                  {showProfileDropdown && (
                    <div className="dropdown-menu show">
                      <a className="dropdown-item" href="#profile">Profile Settings</a>
                      <a className="dropdown-item" href="#preferences">Preferences</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#logout">Logout</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            {/* Dashboard Tab */}
            {activeTab === 'home' && (
              <Row>
                <Col md={6} lg={3}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h6 className="card-title">Current Courses</h6>
                      <h2 className="mb-0">5</h2>
                      <p className="text-muted mb-0">Active courses this semester</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h6 className="card-title">Pending Assignments</h6>
                      <h2 className="mb-0">3</h2>
                      <p className="text-muted mb-0">Due this week</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h6 className="card-title">Average Grade</h6>
                      <h2 className="mb-0">3.8</h2>
                      <p className="text-muted mb-0">Current GPA</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} lg={3}>
                  <Card className="mb-4">
                    <Card.Body>
                      <h6 className="card-title">Attendance Rate</h6>
                      <h2 className="mb-0">95%</h2>
                      <p className="text-muted mb-0">This semester</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">My Courses</h5>
                    <Button variant="primary">
                      <FaPlus className="me-2" /> Add Course
                    </Button>
                  </div>
                  <Row>
                    {courses.map((course, index) => (
                      <Col md={6} lg={4} key={index}>
                        <Card className="mb-4">
                          <Card.Body>
                            <h5 className="card-title">{course.name}</h5>
                            <p className="card-text">{course.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <Badge bg="primary">{course.credits} credits</Badge>
                              <Button variant="outline-primary" size="sm">View Details</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* Assignments Tab */}
            {activeTab === 'assignments' && (
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">My Assignments</h5>
                    <Button variant="primary">
                      <FaPlus className="me-2" /> New Assignment
                    </Button>
                  </div>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignments.map((assignment, index) => (
                        <tr key={index}>
                          <td>{assignment.course}</td>
                          <td>{assignment.title}</td>
                          <td>{assignment.dueDate}</td>
                          <td>
                            <Badge bg={assignment.status === 'Pending' ? 'warning' : 'success'}>
                              {assignment.status}
                            </Badge>
                          </td>
                          <td>
                            <Button variant="outline-primary" size="sm" className="me-2">
                              <FaEdit className="me-1" /> Edit
                            </Button>
                            <Button variant="outline-danger" size="sm">
                              <FaTrash className="me-1" /> Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}

            {/* Grades Tab */}
            {activeTab === 'grades' && (
              <Card>
                <Card.Body>
                  <h5 className="mb-4">Academic Performance</h5>
                  <Row>
                    <Col md={6}>
                      <Card className="mb-4">
                        <Card.Body>
                          <h6 className="card-title">Current GPA</h6>
                          <h2 className="mb-0">3.8</h2>
                          <p className="text-muted mb-0">Overall Grade Point Average</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="mb-4">
                        <Card.Body>
                          <h6 className="card-title">Credits Completed</h6>
                          <h2 className="mb-0">45</h2>
                          <p className="text-muted mb-0">Out of 120 required credits</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Credits</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((grade, index) => (
                        <tr key={index}>
                          <td>{grade.course}</td>
                          <td>{grade.grade}</td>
                          <td>{grade.credits}</td>
                          <td>
                            <Badge bg={grade.status === 'Completed' ? 'success' : 'warning'}>
                              {grade.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Class Schedule</h5>
                    <Button variant="primary">
                      <FaPlus className="me-2" /> Add Event
                    </Button>
                  </div>
                  <div className="schedule-grid">
                    {schedule.map((event, index) => (
                      <Card key={index} className="mb-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">{event.title}</h6>
                              <p className="mb-1 text-muted">{event.time}</p>
                              <p className="mb-0 text-muted">{event.location}</p>
                            </div>
                            <Badge bg="primary">{event.type}</Badge>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Learning Resources</h5>
                    <Button variant="primary">
                      <FaPlus className="me-2" /> Add Resource
                    </Button>
                  </div>
                  <Row>
                    {resources.map((resource, index) => (
                      <Col md={6} lg={4} key={index}>
                        <Card className="mb-4">
                          <Card.Body>
                            <h5 className="card-title">{resource.title}</h5>
                            <p className="card-text">{resource.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <Badge bg="info">{resource.type}</Badge>
                              <Button variant="outline-primary" size="sm">Access</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Messages</h5>
                    <Button variant="primary">
                      <FaPlus className="me-2" /> New Message
                    </Button>
                  </div>
                  <div className="messages-list">
                    {messages.map((message, index) => (
                      <Card key={index} className="mb-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">{message.sender}</h6>
                              <p className="mb-1">{message.subject}</p>
                              <p className="mb-0 text-muted">{message.preview}</p>
                            </div>
                            <small className="text-muted">{message.time}</small>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Upcoming Events</h5>
                    <Button variant="primary">
                      <FaPlus className="me-2" /> Add Event
                    </Button>
                  </div>
                  <div className="events-list">
                    {events.map((event, index) => (
                      <Card key={index} className="mb-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">{event.title}</h6>
                              <p className="mb-1 text-muted">{event.date}</p>
                              <p className="mb-0 text-muted">{event.location}</p>
                            </div>
                            <Badge bg="primary">{event.type}</Badge>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <Card>
                <Card.Body>
                  <h5 className="mb-4">Account Settings</h5>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Major</Form.Label>
                      <Form.Control type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Year</Form.Label>
                      <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="">Select Year</option>
                        <option value="1">Freshman</option>
                        <option value="2">Sophomore</option>
                        <option value="3">Junior</option>
                        <option value="4">Senior</option>
                        <option value="5">Graduate</option>
                      </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
} 