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
    
    if (score < 30) return "你獲得了被罷免的資格";
    if (score < 60) return "雖然你好像還有點良心，但還是聽黨的只有被罷免的結局";
    if (score < 90) return "阿罷之，不罷你罷誰";
    if (score < 120) return "很棒，黨說甚麼，你就做甚麼，這樣真的是好的嗎？看看那堆積如山的連署書";
    return "罷免不適任立委，讓國會回歸正軌";
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
    
    return "罷免不適任立委才能換得正常的國會";
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
                  你的立委生涯結束了！
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
                    <p className="text-gray-600">你扮演的立委是：</p>
                    <h3 className="font-semibold text-lg text-gray-800">{character.name}</h3>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-700">累積人民的怒氣值</p>
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
                  再試一次
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