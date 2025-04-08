'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface CourseCategory {
  title: string;
  description: string;
  courses: number;
  iconClass: string;
  promotion: string;
  level: string;
  duration: string;
  accreditation: string;
  meetLink?: string;
  instructor?: string;
  progress?: number;
  nextSession?: string;
  materials?: string[];
}

const categories: CourseCategory[] = [
  {
    title: 'Microsoft Office Professional',
    description: 'Comprehensive training in Microsoft Office Suite for business environments',
    courses: 5,
    iconClass: 'fas fa-file-alt',
    promotion: 'Average 15% salary increase reported',
    level: 'Beginner to Intermediate',
    duration: '12 weeks',
    accreditation: 'Microsoft Office Specialist Certification',
    meetLink: 'https://meet.google.com/mso-2024',
    instructor: 'Dr. Sarah Johnson',
    progress: 45,
    nextSession: 'Today, 2:00 PM EST',
    materials: ['Week 5 Slides', 'Excel Advanced Functions Guide', 'Practice Dataset']
  },
  {
    title: 'Data Analysis & Statistics',
    description: 'Statistical analysis and data interpretation for business decisions',
    courses: 8,
    iconClass: 'fas fa-chart-line',
    promotion: 'High demand in current job market',
    level: 'Intermediate',
    duration: '16 weeks',
    accreditation: 'Data Analysis Professional Certificate',
    meetLink: 'https://meet.google.com/das-2024',
    instructor: 'Prof. Michael Chen',
    progress: 30,
    nextSession: 'Tomorrow, 10:00 AM EST',
    materials: ['Statistical Methods PDF', 'R Programming Guide', 'Week 3 Assignment']
  },
  {
    title: 'Actuarial Sciences',
    description: 'Risk assessment and financial mathematics for insurance and finance',
    courses: 12,
    iconClass: 'fas fa-calculator',
    promotion: 'Premium career path with excellent compensation',
    level: 'Advanced',
    duration: '24 weeks',
    accreditation: 'Society of Actuaries (SOA) Exam Preparation',
    meetLink: 'https://meet.google.com/act-2024',
    instructor: 'Dr. Robert Martinez',
    progress: 15,
    nextSession: 'Thursday, 3:00 PM EST',
    materials: ['Financial Mathematics Notes', 'Practice Exam Set 2', 'Risk Analysis Case Study']
  },
  {
    title: 'Business Analytics',
    description: 'Advanced analytics and business intelligence for strategic decision making',
    courses: 10,
    iconClass: 'fas fa-briefcase',
    promotion: 'Direct path to management positions',
    level: 'Intermediate to Advanced',
    duration: '20 weeks',
    accreditation: 'Business Analytics Professional Certificate',
    meetLink: 'https://meet.google.com/ba-2024',
    instructor: 'Prof. Emily Thompson',
    progress: 60,
    nextSession: 'Friday, 1:00 PM EST',
    materials: ['Business Intelligence Overview', 'Tableau Dashboard Guide', 'Market Analysis Project']
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && buttonRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !buttonRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigationTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
    { id: 'campus', label: 'Campus', icon: 'fas fa-chalkboard-teacher' },
    { id: 'courses', label: 'Courses', icon: 'fas fa-book' },
    { id: 'library', label: 'Library', icon: 'fas fa-book-reader' },
    { id: 'ai', label: 'AI Assistant', icon: 'fas fa-robot' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file-alt' },
    { id: 'agenda', label: 'Agenda', icon: 'fas fa-calendar-alt' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with University Banner */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-serif">University Learning Platform</h1>
                <p className="mt-1 text-sm text-blue-200">Excellence in Professional Education</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">Welcome, Student</span>
                <div className="relative">
                  <button 
                    ref={buttonRef}
                    className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  >
                    <i className="fas fa-user"></i>
                  </button>
                  {/* Profile Dropdown Menu */}
                  <div 
                    ref={dropdownRef}
                    className={`${isProfileDropdownOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50`}
                  >
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">John Student</p>
                      <p className="text-xs text-gray-500">john.student@university.edu</p>
                    </div>
                    <div className="py-1">
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                        <i className="fas fa-wallet w-5 text-blue-900"></i>
                        <span>Connect Crypto Wallet</span>
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                        <i className="fas fa-credit-card w-5 text-blue-900"></i>
                        <span>Billing & Payments</span>
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                        <i className="fas fa-envelope w-5 text-blue-900"></i>
                        <span>Messaging Settings</span>
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                        <i className="fas fa-shield-alt w-5 text-blue-900"></i>
                        <span>Privacy Settings</span>
                      </a>
                      <div className="border-t border-gray-200 my-1"></div>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <i className="fas fa-sign-out-alt w-5"></i>
                        <span>Logout</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center px-3 py-4 text-sm font-medium border-b-2 
                  ${activeTab === tab.id
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                  transition-colors duration-200
                `}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && (
          <>
            {/* Top Section: Profile + Calendar */}
            <div className="flex gap-6 mb-8">
              {/* Left Column - Profile Section */}
              <div className="w-1/3 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full overflow-hidden mb-4">
                    <img 
                      src="/images/profile/avatar.jpg" 
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-serif text-gray-900">John Student</h2>
                  <p className="text-sm text-gray-600">Computer Science Major</p>
                </div>

                {/* Profile Stats */}
                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-900">24</div>
                      <div className="text-xs text-gray-600">Courses</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-900">156</div>
                      <div className="text-xs text-gray-600">Connections</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-900">92%</div>
                      <div className="text-xs text-gray-600">Attendance</div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <i className="fas fa-graduation-cap text-blue-900 w-5"></i>
                    <span>Senior Year</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-blue-900 w-5"></i>
                    <span>Campus: Main Building</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-blue-900 w-5"></i>
                    <span>Last Login: 2 hours ago</span>
                  </div>
                </div>

                {/* Earned Badges */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Earned Badges</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3 flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-certificate text-blue-900"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Data Science Expert</p>
                        <p className="text-xs text-gray-600">Earned Mar 2024</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-cloud text-green-900"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Cloud Architect</p>
                        <p className="text-xs text-gray-600">Earned Feb 2024</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 flex items-center">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-trophy text-yellow-900"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Hackathon Champion</p>
                        <p className="text-xs text-gray-600">Earned Spring 2024</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <i className="fas fa-code text-purple-900"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Algorithm Master</p>
                        <p className="text-xs text-gray-600">Earned Winter 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Achievements */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Achievements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Completed Advanced Data Analysis Course</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Earned AWS Solutions Architect Certification</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Won University Hackathon 2024</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span>Published Research Paper on AI in Education</span>
                    </div>
                  </div>
                </div>

                {/* Mood */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Current Mood:</span>
                    <span className="text-sm text-blue-900">Ready to learn! 📚</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Update your mood..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm"
                  />
                </div>

                {/* Contact and Mailbox Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="flex items-center">
                      <i className="fas fa-address-book text-blue-900 text-xl mr-3"></i>
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">Contact Book</p>
                        <p className="text-xs text-gray-500">156 contacts</p>
                      </div>
                    </div>
                  </button>
                  <button className="flex items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-blue-900 text-xl mr-3"></i>
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">Mailbox</p>
                        <p className="text-xs text-gray-500">3 new messages</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column - Calendar */}
              <div className="w-2/3 bg-white rounded-xl shadow-lg p-6">
                {/* Academic Calendar */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <h2 className="text-2xl font-serif text-gray-900">Academic Calendar</h2>
                      {/* Analog Clock */}
                      <div className="w-12 h-12 bg-blue-50 rounded-full border-2 border-blue-900 shadow-md">
                        <div className="relative w-full h-full">
                          {/* Clock Center */}
                          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-900 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                          
                          {/* Hour Hand */}
                          <div className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-blue-900 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-[30deg]"></div>
                          
                          {/* Minute Hand */}
                          <div className="absolute top-1/2 left-1/2 w-0.5 h-5 bg-blue-900 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-[90deg]"></div>
                          
                          {/* Second Hand */}
                          <div className="absolute top-1/2 left-1/2 w-0.25 h-5 bg-blue-600 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-[180deg]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-blue-900 hover:text-blue-700">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <span className="font-medium">April 2024</span>
                      <button className="text-blue-900 hover:text-blue-700">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 1;
                      return (
                        <div
                          key={i}
                          className={`
                            min-h-[60px] p-2 border border-gray-100 rounded-lg
                            ${day < 0 ? 'bg-gray-50' : 'bg-white'}
                            ${day === 14 ? 'ring-2 ring-blue-500' : ''}
                          `}
                        >
                          {day >= 0 && day < 30 && (
                            <>
                              <div className="text-right text-sm text-gray-600">{day + 1}</div>
                              {day === 14 && (
                                <div className="mt-1">
                                  <div className="text-xs bg-blue-100 text-blue-800 p-1 rounded">
                                    Module Assessment
                                  </div>
                                </div>
                              )}
                              {day === 4 && (
                                <div className="mt-1">
                                  <div className="text-xs bg-green-100 text-green-800 p-1 rounded">
                                    Office Hours
                                  </div>
                                </div>
                              )}
                              {day === 19 && (
                                <div className="mt-1">
                                  <div className="text-xs bg-orange-100 text-orange-800 p-1 rounded">
                                    Project Due
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Upcoming Deadlines */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Upcoming Deadlines</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-tasks text-blue-900"></i>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Module Assessment</p>
                          <p className="text-xs text-gray-600">April 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-video text-green-900"></i>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Office Hours</p>
                          <p className="text-xs text-gray-600">April 5, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-orange-50 p-3 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-file-alt text-orange-900"></i>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Project Submission</p>
                          <p className="text-xs text-gray-600">April 20, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Materials & Storage */}
                <div className="mb-8">
                  <div className="flex items-center justify-end mb-6">
                    <button className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200">
                      <i className="fas fa-building mr-2"></i>
                      Main Office
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'campus' && (
          <div className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search locations, events, or study groups..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <i className="fas fa-search absolute left-4 top-3 text-gray-400"></i>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center px-4 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Map View
                  </button>
                  <button className="flex items-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <i className="fas fa-filter mr-2"></i>
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Map Section - Full Width */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="relative h-[800px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
                {/* Resort-style Map Background */}
                <div className="absolute inset-0">
                  {/* Main Path */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2"></div>
                  
                  {/* Side Paths */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1/2 bg-gray-200"></div>
                  <div className="absolute top-1/4 right-1/4 w-1 h-1/2 bg-gray-200"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1 h-1/2 bg-gray-200"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1 h-1/2 bg-gray-200"></div>

                  {/* Buildings */}
                  <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 transform -translate-x-1/2 -translate-y-1/2"
                       onClick={() => {
                         const modal = document.getElementById('building-modal');
                         if (modal) modal.classList.remove('hidden');
                       }}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                        <i className="fas fa-graduation-cap text-white text-2xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Main Library</h3>
                      <p className="text-sm text-gray-600 mb-2">Study Rooms Available</p>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-blue-900">
                          <i className="fas fa-star mr-1"></i>
                          <span>4.8 (120 reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-users mr-1"></i>
                          <span>Capacity: 200</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <i className="fas fa-clock mr-1"></i>
                          <span>Open 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 transform translate-x-1/2 -translate-y-1/2"
                       onClick={() => {
                         const modal = document.getElementById('building-modal');
                         if (modal) modal.classList.remove('hidden');
                       }}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                        <i className="fas fa-flask text-white text-2xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Science Building</h3>
                      <p className="text-sm text-gray-600 mb-2">Labs & Research</p>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-blue-900">
                          <i className="fas fa-star mr-1"></i>
                          <span>4.9 (95 reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-users mr-1"></i>
                          <span>Capacity: 150</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <i className="fas fa-clock mr-1"></i>
                          <span>Open 7AM-10PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 transform -translate-x-1/2 translate-y-1/2"
                       onClick={() => {
                         const modal = document.getElementById('building-modal');
                         if (modal) modal.classList.remove('hidden');
                       }}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                        <i className="fas fa-laptop text-white text-2xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Computer Lab</h3>
                      <p className="text-sm text-gray-600 mb-2">24/7 Access</p>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-blue-900">
                          <i className="fas fa-star mr-1"></i>
                          <span>4.7 (150 reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-users mr-1"></i>
                          <span>Capacity: 100</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <i className="fas fa-clock mr-1"></i>
                          <span>Open 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 transform translate-x-1/2 translate-y-1/2"
                       onClick={() => {
                         const modal = document.getElementById('building-modal');
                         if (modal) modal.classList.remove('hidden');
                       }}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                        <i className="fas fa-users text-white text-2xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Student Center</h3>
                      <p className="text-sm text-gray-600 mb-2">Study Groups</p>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-blue-900">
                          <i className="fas fa-star mr-1"></i>
                          <span>4.6 (200 reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-users mr-1"></i>
                          <span>Capacity: 300</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <i className="fas fa-clock mr-1"></i>
                          <span>Open 8AM-11PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 transform -translate-x-1/2 -translate-y-1/2"
                       onClick={() => {
                         const modal = document.getElementById('building-modal');
                         if (modal) modal.classList.remove('hidden');
                       }}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mb-3">
                        <i className="fas fa-coffee text-white text-xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Café</h3>
                      <p className="text-sm text-gray-600 mb-2">Study & Refresh</p>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-blue-900">
                          <i className="fas fa-star mr-1"></i>
                          <span>4.5 (180 reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <i className="fas fa-clock mr-1"></i>
                          <span>Open 7AM-9PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 transform -translate-x-1/2 -translate-y-1/2"
                       onClick={() => {
                         const modal = document.getElementById('building-modal');
                         if (modal) modal.classList.remove('hidden');
                       }}>
                    <div className="p-4 h-full flex flex-col">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-3">
                        <i className="fas fa-book text-white text-xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">Study Hall</h3>
                      <p className="text-sm text-gray-600 mb-2">Quiet Study Area</p>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-blue-900">
                          <i className="fas fa-star mr-1"></i>
                          <span>4.7 (90 reviews)</span>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <i className="fas fa-clock mr-1"></i>
                          <span>Open 6AM-12AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            {/* Header Section with Day Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif text-gray-900">Today's Classes</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-200">
                      <i className="fas fa-chevron-left mr-1"></i>
                      Previous Day
                    </button>
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">A Day</span>
                    <button className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-200">
                      Next Day
                      <i className="fas fa-chevron-right ml-1"></i>
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Course Marketplace
                  </button>
                </div>
              </div>
            </div>

            {/* Class Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Data Analysis Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-chart-line text-white text-2xl"></i>
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">8:00 AM</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Data Analysis & Statistics</h3>
                  <p className="text-blue-100">Room 302</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-clock text-gray-400"></i>
                      <span className="text-sm text-gray-600">2 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-user text-gray-400"></i>
                      <span className="text-sm text-gray-600">Prof. Smith</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Advanced statistical analysis and data interpretation techniques for business decision making.</p>
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg hover:bg-blue-100">
                      View Materials
                    </button>
                    <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                      Join Class
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Analytics Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gradient-to-r from-green-600 to-green-800 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-briefcase text-white text-2xl"></i>
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">10:00 AM</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Business Analytics</h3>
                  <p className="text-green-100">Room 405</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-clock text-gray-400"></i>
                      <span className="text-sm text-gray-600">2 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-user text-gray-400"></i>
                      <span className="text-sm text-gray-600">Dr. Johnson</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Strategic business analytics and data-driven decision making for modern enterprises.</p>
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-green-50 text-green-900 rounded-lg hover:bg-green-100">
                      View Materials
                    </button>
                    <button className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800">
                      Join Class
                    </button>
                  </div>
                </div>
              </div>

              {/* Lab Session Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-flask text-white text-2xl"></i>
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">2:00 PM</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">Lab Session</h3>
                  <p className="text-purple-100">Computer Lab</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-clock text-gray-400"></i>
                      <span className="text-sm text-gray-600">2 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-user text-gray-400"></i>
                      <span className="text-sm text-gray-600">TA Williams</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Hands-on practical session for implementing data analysis techniques and tools.</p>
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-purple-50 text-purple-900 rounded-lg hover:bg-purple-100">
                      View Materials
                    </button>
                    <button className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800">
                      Join Lab
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Marketplace Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-gray-900">Course Marketplace</h2>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">All Categories</option>
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Featured Course 1 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-700">
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">Featured</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Advanced Machine Learning</h3>
                    <p className="text-gray-600 mb-4">Master advanced ML algorithms and their applications in real-world scenarios.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400 mr-1"></i>
                        <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
                      </div>
                      <span className="text-lg font-medium text-gray-900">$299.99</span>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Featured Course 2 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-48 bg-gradient-to-r from-green-500 to-green-700">
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">New</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Cloud Architecture</h3>
                    <p className="text-gray-600 mb-4">Learn to design and implement scalable cloud solutions using AWS and Azure.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400 mr-1"></i>
                        <span className="text-sm text-gray-600">4.9 (95 reviews)</span>
                      </div>
                      <span className="text-lg font-medium text-gray-900">$249.99</span>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Featured Course 3 */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-48 bg-gradient-to-r from-purple-500 to-purple-700">
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">Popular</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-900 mb-2">Data Science Bootcamp</h3>
                    <p className="text-gray-600 mb-4">Comprehensive training in data science, from basics to advanced techniques.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400 mr-1"></i>
                        <span className="text-sm text-gray-600">4.7 (150 reviews)</span>
                      </div>
                      <span className="text-lg font-medium text-gray-900">$349.99</span>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-800">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'library' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search library resources..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200">
                    <i className="fab fa-google-drive mr-2"></i>
                    Connect to Google Drive
                  </button>
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">All Categories</option>
                    <option value="textbooks">Textbooks</option>
                    <option value="journals">Academic Journals</option>
                    <option value="research">Research Papers</option>
                    <option value="multimedia">Multimedia</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Sort By</option>
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* News and Articles */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-gray-900">News and Articles</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200">
                    Latest
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200">
                    Popular
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200">
                    Categories
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                {/* Featured Article (Large) */}
                <div className="col-span-12 md:col-span-8 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-96">
                    <img 
                      src="/images/articles/ai-education.jpg" 
                      alt="AI in Education" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded mb-2 inline-block">Featured</span>
                      <h3 className="text-3xl font-serif text-white mb-2">The Future of AI in Education</h3>
                      <p className="text-white/90 mb-4">Exploring how artificial intelligence is transforming learning experiences and educational outcomes.</p>
                      <div className="flex items-center">
                        <img 
                          src="/images/authors/john-doe.jpg" 
                          alt="John Doe" 
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-white">John Doe</span>
                        <span className="text-white/70 ml-4">2 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Article (Medium) */}
                <div className="col-span-12 md:col-span-4 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-96">
                    <img 
                      src="/images/articles/online-learning.jpg" 
                      alt="Online Learning" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">Education</span>
                      <h3 className="text-xl font-serif text-white mb-2">Best Practices for Online Learning</h3>
                      <div className="flex items-center">
                        <img 
                          src="/images/authors/jane-smith.jpg" 
                          alt="Jane Smith" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-white text-sm">Jane Smith</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regular Articles (Small) */}
                <div className="col-span-12 md:col-span-4 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-48">
                    <img 
                      src="/images/articles/research-methods.jpg" 
                      alt="Research Methods" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Research</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Research Methodologies</h3>
                    <p className="text-sm text-gray-600 mb-4">A comprehensive guide to modern research techniques.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src="/images/authors/david-wilson.jpg" 
                          alt="David Wilson" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-600">David Wilson</span>
                      </div>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                  </div>
                </div>

                {/* Additional Articles */}
                <div className="col-span-12 md:col-span-4 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-48">
                    <img 
                      src="/images/articles/tech-trends.jpg" 
                      alt="Tech Trends" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">Technology</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Emerging Tech Trends in Education</h3>
                    <p className="text-sm text-gray-600 mb-4">How new technologies are shaping the future of learning.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src="/images/authors/sarah-johnson.jpg" 
                          alt="Sarah Johnson" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-600">Sarah Johnson</span>
                      </div>
                      <span className="text-sm text-gray-500">1 day ago</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-48">
                    <img 
                      src="/images/articles/student-success.jpg" 
                      alt="Student Success" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Success</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategies for Academic Success</h3>
                    <p className="text-sm text-gray-600 mb-4">Proven methods to enhance your learning experience.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src="/images/authors/michael-brown.jpg" 
                          alt="Michael Brown" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-600">Michael Brown</span>
                      </div>
                      <span className="text-sm text-gray-500">4 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reading Lists */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-gray-900">Reading Lists</h2>
                <button className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200">
                  <i className="fas fa-plus mr-2"></i>
                  Create New List
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Required Reading */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-book text-blue-900 mr-3"></i>
                      <h3 className="font-semibold">Required Reading</h3>
                    </div>
                    <span className="text-sm text-gray-500">12 items</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Core materials for current courses</p>
                    <div className="flex items-center text-sm text-blue-900">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Updated 2 hours ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-900 hover:text-blue-700 text-sm">
                      View List
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-share-alt"></i>
                      </button>
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recommended */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-star text-yellow-500 mr-3"></i>
                      <h3 className="font-semibold">Recommended</h3>
                    </div>
                    <span className="text-sm text-gray-500">8 items</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Additional resources for deeper learning</p>
                    <div className="flex items-center text-sm text-blue-900">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Updated yesterday</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-900 hover:text-blue-700 text-sm">
                      View List
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-share-alt"></i>
                      </button>
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Saved for Later */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-bookmark text-green-600 mr-3"></i>
                      <h3 className="font-semibold">Saved for Later</h3>
                    </div>
                    <span className="text-sm text-gray-500">5 items</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Bookmarked resources</p>
                    <div className="flex items-center text-sm text-blue-900">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Updated 3 days ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-900 hover:text-blue-700 text-sm">
                      View List
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-share-alt"></i>
                      </button>
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Research Papers */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-file-alt text-purple-600 mr-3"></i>
                      <h3 className="font-semibold">Research Papers</h3>
                    </div>
                    <span className="text-sm text-gray-500">15 items</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Academic papers and publications</p>
                    <div className="flex items-center text-sm text-blue-900">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Updated 1 week ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-900 hover:text-blue-700 text-sm">
                      View List
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-share-alt"></i>
                      </button>
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Study Notes */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-pencil-alt text-orange-500 mr-3"></i>
                      <h3 className="font-semibold">Study Notes</h3>
                    </div>
                    <span className="text-sm text-gray-500">20 items</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Personal study materials and notes</p>
                    <div className="flex items-center text-sm text-blue-900">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Updated today</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-900 hover:text-blue-700 text-sm">
                      View List
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-share-alt"></i>
                      </button>
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Multimedia Resources */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className="fas fa-video text-red-500 mr-3"></i>
                      <h3 className="font-semibold">Multimedia Resources</h3>
                    </div>
                    <span className="text-sm text-gray-500">10 items</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Videos, podcasts, and interactive content</p>
                    <div className="flex items-center text-sm text-blue-900">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Updated 2 days ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-900 hover:text-blue-700 text-sm">
                      View List
                    </button>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-share-alt"></i>
                      </button>
                      <button className="text-gray-500 hover:text-blue-900">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-6">
            {/* AI Chat Interface */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Chat History Sidebar */}
              <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-serif text-gray-900">Chat History</h2>
                  <button className="text-blue-900 hover:text-blue-700">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="space-y-3">
                  {['Study Planning', 'Research Help', 'Math Problems', 'Writing Review'].map((chat, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center p-3 rounded-lg text-left hover:bg-blue-50 transition-colors duration-200"
                    >
                      <i className="fas fa-comments text-blue-900 mr-3"></i>
                      <div>
                        <p className="font-medium text-gray-900">{chat}</p>
                        <p className="text-xs text-gray-500">Last active: 2h ago</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Chat Area */}
              <div className="md:col-span-3 bg-white rounded-lg shadow-lg flex flex-col h-[800px]">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <i className="fas fa-robot text-blue-900"></i>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">Academic AI Assistant</h3>
                        <p className="text-sm text-gray-600">Always here to help</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-blue-900">
                        <i className="fas fa-search"></i>
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-900">
                        <i className="fas fa-cog"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* AI Message */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-robot text-blue-900 text-sm"></i>
                    </div>
                    <div className="ml-3 bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-gray-900">Hello! I'm your academic AI assistant. How can I help you with your studies today?</p>
                      <p className="text-xs text-gray-500 mt-1">10:00 AM</p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start justify-end">
                    <div className="mr-3 bg-blue-900 text-white rounded-lg p-3 max-w-[80%]">
                      <p>Can you help me understand complex algorithms?</p>
                      <p className="text-xs text-blue-100 mt-1">10:01 AM</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-gray-600 text-sm"></i>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-robot text-blue-900 text-sm"></i>
                    </div>
                    <div className="ml-3 bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-gray-900">Of course! Let's start with the basics. What specific algorithm would you like to learn about?</p>
                      <p className="text-xs text-gray-500 mt-1">10:02 AM</p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-end space-x-4">
                    <div className="flex-1 bg-gray-100 rounded-lg p-2">
                      <textarea
                        rows={3}
                        placeholder="Type your message..."
                        className="w-full bg-transparent border-0 resize-none focus:ring-0 text-gray-900 placeholder-gray-500 text-sm"
                      ></textarea>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-blue-900">
                            <i className="fas fa-paperclip"></i>
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-900">
                            <i className="fas fa-image"></i>
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-900">
                            <i className="fas fa-code"></i>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>Press Enter to send</span>
                          <span>Shift + Enter for new line</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-900 text-white rounded-lg p-3 hover:bg-blue-800 transition-colors duration-200">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resume' && (
          <div className="space-y-6">
            {/* Professional Portfolio */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-gray-900">Professional Portfolio</h2>
                <button className="text-blue-900 hover:text-blue-700">
                  <i className="fas fa-download"></i>
                </button>
              </div>
              <div className="space-y-6">
                {/* Professional Photo and Contact Info */}
                <div className="flex items-start space-x-6 border-b border-gray-200 pb-6">
                  <div className="w-32 h-32 rounded-lg overflow-hidden">
                    <img 
                      src="/images/profile/professional.jpg" 
                      alt="Professional Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">John Student</h3>
                    <p className="text-sm text-gray-600 mb-4">Senior Computer Science Student</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <i className="fas fa-envelope text-blue-900 w-5"></i>
                        <span className="ml-2">john.student@university.edu</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-phone text-blue-900 w-5"></i>
                        <span className="ml-2">(555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt text-blue-900 w-5"></i>
                        <span className="ml-2">San Francisco, CA</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fab fa-linkedin text-blue-900 w-5"></i>
                        <span className="ml-2">linkedin.com/in/johnstudent</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                  <p className="text-sm text-gray-600">
                    Senior Computer Science student with a strong focus on data science and cloud computing. 
                    Proven track record in competitive programming and hackathons. 
                    Certified professional in Microsoft and AWS technologies.
                  </p>
                </div>

                {/* Work History */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold mb-3">Work History</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-briefcase text-blue-900"></i>
                          </div>
                          <div>
                            <h4 className="font-medium">Software Engineering Intern</h4>
                            <p className="text-sm text-gray-600">Tech Solutions Inc.</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">Jun 2023 - Present</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <p>• Developed and maintained cloud-based applications using AWS services</p>
                        <p>• Implemented machine learning models for data analysis</p>
                        <p>• Collaborated with cross-functional teams on agile development projects</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-laptop-code text-green-900"></i>
                          </div>
                          <div>
                            <h4 className="font-medium">Research Assistant</h4>
                            <p className="text-sm text-gray-600">University AI Lab</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">Jan 2023 - May 2023</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <p>• Conducted research on machine learning algorithms</p>
                        <p>• Published findings in academic journals</p>
                        <p>• Presented research at national conferences</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-code text-purple-900"></i>
                          </div>
                          <div>
                            <h4 className="font-medium">Freelance Developer</h4>
                            <p className="text-sm text-gray-600">Self-Employed</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">Sep 2022 - Dec 2022</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <p>• Built custom web applications for small businesses</p>
                        <p>• Implemented responsive designs and modern UI/UX</p>
                        <p>• Managed client relationships and project timelines</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold mb-3">Professional Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-certificate text-blue-900"></i>
                        </div>
                        <span className="text-sm text-blue-900">Issued: Mar 2024</span>
                      </div>
                      <h4 className="font-medium">Data Science Professional</h4>
                      <p className="text-sm text-gray-600">Microsoft Certified</p>
                      <div className="mt-2 text-xs text-gray-500">
                        <p>• Advanced data analysis and visualization</p>
                        <p>• Machine learning implementation</p>
                        <p>• Big data processing</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-cloud text-green-900"></i>
                        </div>
                        <span className="text-sm text-green-900">Issued: Feb 2024</span>
                      </div>
                      <h4 className="font-medium">Cloud Computing</h4>
                      <p className="text-sm text-gray-600">AWS Certified</p>
                      <div className="mt-2 text-xs text-gray-500">
                        <p>• Cloud architecture design</p>
                        <p>• Serverless computing</p>
                        <p>• Cloud security implementation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competition Achievements */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Competition Achievements</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-trophy text-yellow-900"></i>
                          </div>
                          <div>
                            <h4 className="font-medium">Hackathon Winner</h4>
                            <p className="text-sm text-gray-600">Spring 2024</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-yellow-900">1st Place</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <p>• Developed an AI-powered educational platform</p>
                        <p>• Implemented real-time collaboration features</p>
                        <p>• Awarded for innovation and technical excellence</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-medal text-purple-900"></i>
                          </div>
                          <div>
                            <h4 className="font-medium">Coding Competition</h4>
                            <p className="text-sm text-gray-600">Winter 2024</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-purple-900">2nd Place</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        <p>• Advanced algorithms implementation</p>
                        <p>• Optimized solution design</p>
                        <p>• Team leadership and coordination</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills & Expertise */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold mb-3">Technical Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-900 rounded-full text-xs">Python</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-900 rounded-full text-xs">JavaScript</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-900 rounded-full text-xs">Java</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-900 rounded-full text-xs">C++</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-900 rounded-full text-xs">AWS</span>
                        <span className="px-2 py-1 bg-green-100 text-green-900 rounded-full text-xs">Azure</span>
                        <span className="px-2 py-1 bg-green-100 text-green-900 rounded-full text-xs">Docker</span>
                        <span className="px-2 py-1 bg-green-100 text-green-900 rounded-full text-xs">Kubernetes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agenda' && (
          <div className="space-y-6">
            {/* Agenda Header */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-serif text-gray-900">My Agenda</h2>
                  <p className="text-sm text-gray-600">April 15, 2024</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                    <i className="fas fa-plus mr-2"></i>
                    Add Event
                  </button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Calendar View
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-900">12</div>
                  <div className="text-sm text-gray-600">Upcoming Events</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-900">4</div>
                  <div className="text-sm text-gray-600">Today's Classes</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-900">2</div>
                  <div className="text-sm text-gray-600">Study Groups</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-900">3</div>
                  <div className="text-sm text-gray-600">Private Events</div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - Today's Schedule */}
              <div className="col-span-2 space-y-6">
                {/* Today's Events */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Today's Schedule</h3>
                  <div className="space-y-4">
                    {[
                      { time: '8:00 AM', title: 'Data Analysis & Statistics', type: 'class', location: 'Room 302', duration: '2h' },
                      { time: '10:00 AM', title: 'Business Analytics', type: 'class', location: 'Room 405', duration: '2h' },
                      { time: '12:00 PM', title: 'Lunch with Study Group', type: 'study', location: 'Cafeteria', duration: '1h' },
                      { time: '2:00 PM', title: 'Lab Session', type: 'lab', location: 'Computer Lab', duration: '2h' },
                      { time: '4:00 PM', title: 'Office Hours', type: 'meeting', location: 'Faculty Office', duration: '1h' }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-24 text-sm font-medium text-gray-900">{event.time}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.location}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            event.type === 'class' ? 'bg-blue-100 text-blue-900' :
                            event.type === 'study' ? 'bg-green-100 text-green-900' :
                            event.type === 'lab' ? 'bg-purple-100 text-purple-900' :
                            'bg-yellow-100 text-yellow-900'
                          }`}>
                            {event.type}
                          </span>
                          <span className="text-sm text-gray-600">{event.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {[
                      { date: 'Apr 16', title: 'Advanced Programming Workshop', type: 'workshop', price: '$49.99' },
                      { date: 'Apr 17', title: 'Data Science Meetup', type: 'meetup', price: 'Free' },
                      { date: 'Apr 18', title: 'Cloud Computing Certification', type: 'certification', price: '$199.99' }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-16 text-center">
                          <div className="text-sm font-medium text-gray-900">{event.date}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.type}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-medium text-gray-900">{event.price}</span>
                          <button className="px-3 py-1 bg-blue-900 text-white rounded-lg hover:bg-blue-800 text-sm">
                            Register
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Course Marketplace */}
              <div className="space-y-6">
                {/* Featured Courses */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Courses</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Advanced Data Science', instructor: 'Dr. Sarah Johnson', price: '$299.99', rating: 4.8 },
                      { title: 'Cloud Architecture', instructor: 'Prof. Michael Chen', price: '$249.99', rating: 4.9 },
                      { title: 'Machine Learning', instructor: 'Dr. Robert Martinez', price: '$349.99', rating: 4.7 }
                    ].map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <h4 className="font-medium text-gray-900 mb-1">{course.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="fas fa-star text-yellow-400 mr-1"></i>
                            <span className="text-sm text-gray-600">{course.rating}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">{course.price}</span>
                            <button className="px-3 py-1 bg-blue-900 text-white rounded-lg hover:bg-blue-800 text-sm">
                              Enroll
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Private Events */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Private Events</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Study Group Meeting', date: 'Apr 16, 2:00 PM', members: 5 },
                      { title: 'Project Discussion', date: 'Apr 17, 3:00 PM', members: 3 },
                      { title: 'Research Collaboration', date: 'Apr 18, 4:00 PM', members: 4 }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-users text-gray-400"></i>
                          <span className="text-sm text-gray-600">{event.members} members</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 