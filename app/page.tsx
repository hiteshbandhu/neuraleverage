"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const phrases = [
    "Transforming AI research into interactive quizzes",
    "Making complex AI concepts accessible to all ages",
    "From 8th graders to developers: AI learning for everyone",
    "Unlocking the potential of AI research through gamification",
    "Bridging the gap between academia and learners",
    "Turn research papers into engaging quizzes",
    "Empowering learners with cutting-edge AI knowledge",
    "From research to quiz: AI at your fingertips",
    "Revolutionizing AI education through interactive learning",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const technologyTrendsData = [
    { year: 1950, technology: 10, researchPapers: 10, attentionSpan: 20, retentionRate: 80 },
    { year: 1970, technology: 30, researchPapers: 15, attentionSpan: 18, retentionRate: 75 },
    { year: 1990, technology: 50, researchPapers: 20, attentionSpan: 15, retentionRate: 70 },
    { year: 2010, technology: 80, researchPapers: 25, attentionSpan: 12, retentionRate: 60 },
    { year: 2023, technology: 100, researchPapers: 30, attentionSpan: 8, retentionRate: 50 },
  ];

  const learningMethodsData = [
    { method: 'Lecture', retentionRate: 5 },
    { method: 'Reading', retentionRate: 10 },
    { method: 'Audio/Visual', retentionRate: 20 },
    { method: 'Demonstration', retentionRate: 30 },
    { method: 'Discussion Group', retentionRate: 50 },
    { method: 'Practice by Doing', retentionRate: 75 },
    { method: 'Teaching Others', retentionRate: 90 },
  ];

  const aiPublicationsData = [
    { year: 2010, publications: 3000 },
    { year: 2012, publications: 5000 },
    { year: 2014, publications: 8000 },
    { year: 2016, publications: 14000 },
    { year: 2018, publications: 25000 },
    { year: 2020, publications: 50000 },
    { year: 2022, publications: 100000 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white flex flex-col items-center p-8 sm:p-16 font-ibm-plex-mono"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        key={index}
        className="text-4xl font-light mb-12"
      >
        {phrases[index]}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-2xl mb-8 font-bold"
      >
        We've transformed <span className="text-blue-300">1,000+</span> research papers into <span className="text-blue-300">5,000+</span> interactive quizzes
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-xl mb-12 font-normal"
      >
        Leverage our platform to navigate the complexities of AI research through gamified learning experiences.
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="w-full max-w-3xl h-64 mb-8"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={technologyTrendsData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
            <Legend />
            <Line type="monotone" dataKey="technology" name="Technological Advancement" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
            <Line type="monotone" dataKey="researchPapers" name="Research Paper Volume" stroke="#82ca9d" strokeWidth={2} />
            <Line type="monotone" dataKey="attentionSpan" name="Average Attention Span" stroke="#ffc658" strokeWidth={2} />
            <Line type="monotone" dataKey="retentionRate" name="Information Retention Rate" stroke="#ff7300" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="text-xl mb-8 text-center font-normal"
      >
        As technological advancements accelerate and research output increases, cognitive load and information overload pose significant challenges to effective learning.
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="w-full max-w-3xl h-64 mb-8"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={learningMethodsData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="method" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
            <Legend />
            <Bar dataKey="retentionRate" name="Retention Rate (%)" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="text-xl mb-8 text-center font-normal"
      >
        Our interactive quizzes leverage active learning principles, significantly enhancing retention rates compared to passive learning methods.
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="w-full max-w-3xl h-64 mb-8"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={aiPublicationsData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
            <Legend />
            <Line type="monotone" dataKey="publications" name="AI Publications" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="text-xl mb-8 text-center font-normal"
      >
        The exponential growth in AI research publications underscores the need for efficient knowledge dissemination and assimilation strategies.
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
        className="mt-8 text-sm font-normal"
      >
        with ❤️ by @_hiteshbandhu
      </motion.div>
    </motion.div>
  );
};

export default HomePage;