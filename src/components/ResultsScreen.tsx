import React from 'react';
import { useGame } from '../context/GameContext';
import ScoreTree from './ScoreTree';
import { motion } from 'framer-motion';

const ResultsScreen: React.FC = () => {
  const { gameState, restartGame } = useGame();
  const character = gameState.selectedCharacter;
  
  if (!character) return null;
  
  // Maximum possible score (for the tree visualization)
  const maxScore = 200;
  
  // Determine result message based on score
  const getResultMessage = () => {
    const score = gameState.score;
    
    if (score < 30) return "You're just beginning your journey!";
    if (score < 60) return "You're making progress on your path.";
    if (score < 90) return "You've gained significant insights!";
    if (score < 120) return "Your understanding is truly impressive!";
    return "You've reached remarkable levels of self-awareness!";
  };
  
  // Get personality trait based on character type and score
  const getPersonalityTrait = () => {
    const characterType = character.id;
    const score = gameState.score;
    
    if (characterType === 'analytical') {
      if (score < 50) return "Emerging Analyst";
      if (score < 100) return "Logical Thinker";
      return "Master Strategist";
    }
    
    if (characterType === 'creative') {
      if (score < 50) return "Budding Creator";
      if (score < 100) return "Innovative Mind";
      return "Visionary Genius";
    }
    
    if (characterType === 'emotional') {
      if (score < 50) return "Developing Empath";
      if (score < 100) return "Intuitive Soul";
      return "Emotional Sage";
    }
    
    return "Balanced Individual";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <ScoreTree score={gameState.score} maxScore={maxScore} />
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Your Journey Is Complete!
                </h1>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 mr-4">
                    <img 
                      src={character.avatar} 
                      alt={character.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600">You explored as</p>
                    <h3 className="font-semibold text-lg text-gray-800">{character.name}</h3>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-700">Final Score</p>
                    <p className="text-2xl font-bold text-indigo-600">{gameState.score}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((gameState.score / maxScore) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {getPersonalityTrait()}
                  </h3>
                  <p className="text-gray-700">{getResultMessage()}</p>
                </motion.div>
                
                <motion.button
                  onClick={restartGame}
                  className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try Again
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsScreen;