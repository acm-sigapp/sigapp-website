import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Gamepad2, MapPin, Download } from "lucide-react";
import { ParticleSystem } from "@/components/ui/particles";
import { useNavigate } from "react-router-dom";

const MetaversePage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const gameInfo = {
    title: "Spy Fiction",
    developers: ["Ankit Mandal", "Rishav Goswami"],
    team: "Metaverse Domain",
    description: "Spy-Fiction is a stealth-driven experience where you play as Agent 67, an elite operative sent to infiltrate a hostile facility. Avoid detection, collect classified documents, and uncover fragments of a hidden truth. But the deeper you go… the more it feels like you were expected.",
    location: "India",
    link: "https://ankit-mandal006.itch.io/spy-fiction",
    genre: "Adventure, Puzzle, Spy Thriller",
    controls: [
      { action: "Move", key: "W A S D", behavior: "Full speed movement (Base Layer)" },
      { action: "Aim", key: "Right Click", behavior: "Transitions Animator to Aim Walk layer" },
      { action: "Shoot", key: "Left Click", behavior: "Only active while Right Click is held" },
      { action: "Interact", key: "E", behavior: "Collect Documents, Next Dialogue" }
    ],
    images: [
      "https://img.itch.zone/aW1hZ2UvNDQ0NDExNS8yNjQ4NjQ5OC5wbmc=/original/09lI%2FA.png",
      "https://img.itch.zone/aW1hZ2UvNDQ0NDExNS8yNjQ4NjQ5OS5wbmc=/original/Ain2KT.png",
      "https://img.itch.zone/aW1hZ2UvNDQ0NDExNS8yNjQ4NjUwMC5wbmc=/original/JUDWpY.png",
      "https://img.itch.zone/aW1hZ2UvNDQ0NDExNS8yNjQ4NjUwMS5wbmc=/original/QXLR4%2F.png"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticleSystem />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

      <motion.div
        className="relative z-10 container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <div className="flex justify-center items-center mb-6">
            <img
              src="/logo_1.png"
              alt="ACM SIGAPP Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain mr-4"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-blue-400">
                ACM SIGAPP
              </h1>
              <p className="text-sm md:text-base text-gray-400 mt-1">Special Interest Group on Applied Computing</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            METAVERSE DOMAIN
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Exploring the frontiers of gaming and virtual reality
          </p>
        </motion.div>

        {/* Game Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
          variants={cardVariants}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Gamepad2 className="w-4 h-4" />
              {gameInfo.genre}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {gameInfo.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Developers</h3>
              <div className="space-y-2">
                {gameInfo.developers.map((developer, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span>{developer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Team</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <Users className="w-5 h-5 text-purple-400" />
                <span>{gameInfo.team}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 mt-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{gameInfo.location} Game Developer</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">About the Game</h3>
            <p className="text-gray-300 leading-relaxed">
              {gameInfo.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Game Controls</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-700/50">
                    <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Action</th>
                    <th className="px-4 py-3 text-left text-cyan-400 font-semibold">PC Key</th>
                    <th className="px-4 py-3 text-left text-cyan-400 font-semibold">Logic / Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  {gameInfo.controls.map((control, index) => (
                    <tr key={index} className="border-t border-gray-700/30 hover:bg-gray-700/20 transition-colors">
                      <td className="px-4 py-3 text-gray-300 font-medium">{control.action}</td>
                      <td className="px-4 py-3 text-purple-400 font-mono font-semibold">{control.key}</td>
                      <td className="px-4 py-3 text-gray-300">{control.behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Game Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gameInfo.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Spy Fiction Screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg border border-gray-700/50 shadow-lg group-hover:shadow-purple-500/20 transition-shadow duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium bg-black/70 px-3 py-1 rounded-full">
                      Screenshot {index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Download Game</h3>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-6">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Download className="w-4 h-4" />
                  Spy Fiction Game - In Development Phase
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Download and try out the Spy Fiction game currently in development. Experience the stealth-driven gameplay as Agent 67 in this thrilling spy adventure demo.
                </p>
                <Button
                  onClick={() => window.open('/Spy-Fiction_PC_BUILD (Demo).zip', '_blank')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => window.open(gameInfo.link, '_blank')}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View on itch.io
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MetaversePage;