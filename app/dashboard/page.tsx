'use client';

import React, { useState } from 'react';
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

  const navigationTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
    { id: 'classrooms', label: 'Classrooms', icon: 'fas fa-chalkboard-teacher' },
    { id: 'library', label: 'Library', icon: 'fas fa-book-reader' },
    { id: 'ai', label: 'AI Assistant', icon: 'fas fa-robot' }
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
                <button className="bg-blue-800 p-2 rounded-full">
                  <i className="fas fa-user"></i>
                </button>
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
              <div className="w-1/3 bg-white rounded-lg shadow-lg p-6">
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
              </div>

              {/* Right Column - Calendar (Existing Calendar Code) */}
              <div className="w-2/3 bg-white rounded-lg shadow-lg p-6">
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

            {/* MySpace-style Sections Below */}
            <div className="grid grid-cols-2 gap-6">
              {/* About Me */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-4">About Me</h3>
                <div className="prose prose-sm">
                  <p>Hey there! I'm passionate about technology and learning new things. Currently focusing on AI and Machine Learning courses.</p>
                  <div className="mt-4">
                    <h4 className="font-medium">Interests:</h4>
                    <ul className="list-disc list-inside">
                      <li>Artificial Intelligence</li>
                      <li>Web Development</li>
                      <li>Data Science</li>
                      <li>Mobile App Development</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-4">Recent Blog Posts</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium">My Journey in Machine Learning</h4>
                    <p className="text-sm text-gray-600 mt-1">Just completed my first neural network project!</p>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <i className="fas fa-clock mr-1"></i>
                      <span>Posted 2 days ago</span>
                      <span className="mx-2">•</span>
                      <i className="fas fa-comment mr-1"></i>
                      <span>5 comments</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium">Study Group Meetup</h4>
                    <p className="text-sm text-gray-600 mt-1">Looking for study buddies for the upcoming exams!</p>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <i className="fas fa-clock mr-1"></i>
                      <span>Posted 4 days ago</span>
                      <span className="mx-2">•</span>
                      <i className="fas fa-comment mr-1"></i>
                      <span>8 comments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Friends */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-gray-900">Friends</h3>
                  <button className="text-sm text-blue-900 hover:text-blue-700">View All</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((friend) => (
                    <div key={friend} className="text-center">
                      <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full overflow-hidden mb-2">
                        <img 
                          src={`/images/friends/friend-${friend}.jpg`}
                          alt={`Friend ${friend}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium truncate">Friend Name</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-gray-900">Comments</h3>
                  <button className="text-sm text-blue-900 hover:text-blue-700">Leave a Comment</button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex-shrink-0">
                      <img src="/images/friends/friend-1.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sarah K.</p>
                      <p className="text-sm text-gray-600">Great presentation in class today!</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>2 hours ago</span>
                        <span className="mx-2">•</span>
                        <button className="text-blue-900 hover:text-blue-700">Reply</button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex-shrink-0">
                      <img src="/images/friends/friend-2.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mike R.</p>
                      <p className="text-sm text-gray-600">Thanks for helping with the project!</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>1 day ago</span>
                        <span className="mx-2">•</span>
                        <button className="text-blue-900 hover:text-blue-700">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'classrooms' && (
          <div className="space-y-6">
            {/* Practice Center */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Practice Center</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Practice Tests */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                      <i className="fas fa-tasks text-2xl text-white"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Practice Tests</h3>
                      <p className="text-sm text-gray-600">Timed assessments and mock exams</p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Available Tests</span>
                      <span className="text-sm font-medium text-blue-900">15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Completed</span>
                      <span className="text-sm font-medium text-blue-900">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Average Score</span>
                      <span className="text-sm font-medium text-blue-900">85%</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200">
                      Start New Test
                    </button>
                    <button className="w-full border border-blue-900 text-blue-900 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200">
                      View Past Results
                    </button>
                  </div>
                </div>

                {/* Problem Sets */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                      <i className="fas fa-puzzle-piece text-2xl text-white"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Problem Sets</h3>
                      <p className="text-sm text-gray-600">Course-specific practice problems</p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Average Grade</span>
                        <span className="text-sm font-medium text-green-700">B+</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-700 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Average Difficulty</span>
                      <div className="flex items-center">
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-gray-300"></i>
                        <i className="fas fa-star text-gray-300"></i>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Streak</span>
                      <span className="text-sm font-medium text-green-700">5 days</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors duration-200">
                      Continue Practice
                    </button>
                    <button className="w-full border border-green-700 text-green-700 py-2 px-4 rounded-md hover:bg-green-50 transition-colors duration-200">
                      View Problem Library
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Licenses */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-gray-900">Certifications & Licenses</h2>
                <button 
                  className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-200"
                  onClick={() => document.getElementById('coursera-modal').classList.remove('hidden')}
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Browse Coursera Courses
                </button>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-certificate text-2xl text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Professional Credentials</h3>
                    <p className="text-sm text-gray-600">Track your professional qualifications</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">In Progress</span>
                    <span className="text-sm font-medium text-orange-600">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Completed</span>
                    <span className="text-sm font-medium text-orange-600">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Next Exam</span>
                    <span className="text-sm font-medium text-orange-600">May 15</span>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-200">
                    View Certifications
                  </button>
                  <button className="w-full border border-orange-600 text-orange-600 py-2 px-4 rounded-md hover:bg-orange-50 transition-colors duration-200">
                    Schedule Exam
                  </button>
                </div>
              </div>
            </div>

            {/* Coursera Courses Modal */}
            <div id="coursera-modal" className="fixed inset-0 bg-black bg-opacity-50 hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-serif text-gray-900">Coursera Courses</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => document.getElementById('coursera-modal').classList.add('hidden')}
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Course Card 1 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="relative h-48">
                        <img 
                          src="/images/courses/google-data-analytics.jpg" 
                          alt="Google Data Analytics" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">Professional Certificate</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2">Google Data Analytics</h4>
                        <p className="text-sm text-gray-600 mb-4">Learn data analysis and visualization skills</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">8 months</span>
                          <button className="text-blue-900 hover:text-blue-700 text-sm">
                            View Course
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Course Card 2 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="relative h-48">
                        <img 
                          src="/images/courses/ibm-data-science.jpg" 
                          alt="IBM Data Science" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">Professional Certificate</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2">IBM Data Science</h4>
                        <p className="text-sm text-gray-600 mb-4">Master data science and machine learning</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">10 months</span>
                          <button className="text-blue-900 hover:text-blue-700 text-sm">
                            View Course
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Course Card 3 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="relative h-48">
                        <img 
                          src="/images/courses/meta-frontend.jpg" 
                          alt="Meta Front-End Development" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">Professional Certificate</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2">Meta Front-End Development</h4>
                        <p className="text-sm text-gray-600 mb-4">Become a front-end developer</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">7 months</span>
                          <button className="text-blue-900 hover:text-blue-700 text-sm">
                            View Course
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Course Card 4 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="relative h-48">
                        <img 
                          src="/images/courses/google-ux-design.jpg" 
                          alt="Google UX Design" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">Professional Certificate</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2">Google UX Design</h4>
                        <p className="text-sm text-gray-600 mb-4">Learn user experience design principles</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">6 months</span>
                          <button className="text-blue-900 hover:text-blue-700 text-sm">
                            View Course
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200">
                  <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200">
                    View All Courses
                  </button>
                </div>
              </div>
            </div>

            {/* Games */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Games</h2>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center">
                    <i className="fas fa-gamepad text-2xl text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Learning Games</h3>
                    <p className="text-sm text-gray-600">Track your progress and achievements</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Accuracy</span>
                    <span className="text-sm font-medium text-purple-700">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Time Spent</span>
                    <span className="text-sm font-medium text-purple-700">12.5 hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mastery Level</span>
                    <span className="text-sm font-medium text-purple-700">Advanced</span>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <button className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-colors duration-200">
                    View Detailed Analytics
                  </button>
                  <button className="w-full border border-purple-700 text-purple-700 py-2 px-4 rounded-md hover:bg-purple-50 transition-colors duration-200">
                    Download Report
                  </button>
                </div>
              </div>
            </div>

            {/* Virtual Classrooms */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Virtual Classrooms</h2>
              <div className="grid grid-cols-4 gap-4">
                {categories.map((category) => (
                  <div key={category.title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    {/* Course Artwork */}
                    <div className="relative h-32 w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={`/images/courses/${category.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={`${category.title} course artwork`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-2">
                        <span className="text-xs text-white bg-blue-900/80 px-2 py-1 rounded">
                          {category.level}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      {/* Course Header */}
                      <div className="flex flex-col mb-3">
                        <div className="flex items-center mb-2">
                          <i className={`${category.iconClass} text-xl text-blue-900 mr-3`}></i>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Next Session</p>
                          <p className="text-sm text-blue-900">{category.nextSession}</p>
                        </div>
                      </div>

                      {/* Instructor Info */}
                      <div className="flex items-center mb-3 pb-2 border-b border-gray-200">
                        <i className="fas fa-user-tie text-gray-400 mr-2"></i>
                        <span className="text-sm text-gray-600">Instructor: {category.instructor}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">Course Progress</span>
                          <span className="text-sm font-medium text-gray-700">{category.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-blue-900 h-1.5 rounded-full transition-all duration-300" 
                            style={{ width: `${category.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Course Materials */}
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">Current Materials</h4>
                        <div className="space-y-1">
                          {category.materials?.map((material, index) => (
                            <div key={index} className="flex items-center text-xs">
                              <i className="fas fa-file-alt text-gray-400 mr-1"></i>
                              <a href="#" className="text-blue-900 hover:text-blue-700 truncate">{material}</a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end space-x-2">
                        <button 
                          className="flex items-center px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors duration-200"
                          onClick={() => window.open(category.meetLink, '_blank')}
                        >
                          <i className="fas fa-video mr-1"></i>
                          Join Meet
                        </button>
                        <button className="flex items-center px-3 py-1.5 bg-blue-900 text-white text-sm rounded-md hover:bg-blue-800 transition-colors duration-200">
                          <i className="fas fa-chalkboard-teacher mr-1"></i>
                          Enter Class
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
      </main>
    </div>
  );
} 