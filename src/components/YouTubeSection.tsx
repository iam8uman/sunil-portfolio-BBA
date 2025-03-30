import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Sample YouTube videos with improved data
const videos = [
  {
    id: 1,
    title: "Understanding Banking & Insurance",
    description:
      "Learn the basics of how banking and insurance services work together.",
    thumbnail:
      "https://images.pexels.com/photos/3576258/pexels-photo-3576258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "12:45",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
  },
  {
    id: 2,
    title: "Financial Planning Tips",
    description:
      "Essential tips for planning your financial future and investments.",
    thumbnail:
      "https://images.pexels.com/photos/3576258/pexels-photo-3576258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "08:32",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
  },
  {
    id: 3,
    title: "Career Growth in Banking",
    description:
      "How to progress your career in the banking sector with practical advice.",
    thumbnail:
      "https://images.pexels.com/photos/3576258/pexels-photo-3576258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: "15:21",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
  },
];

const YouTubeSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleVideoClick = (video: (typeof videos)[0]) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  return (
    <section id="youtube" className="py-24 px-6 md:px-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-red-50/50 via-pink-50/30 to-purple-50/50 dark:from-red-950/10 dark:via-pink-950/5 dark:to-purple-950/10" />
      <div className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 bg-red-200/20 dark:bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            YouTube Content
          </h2>
          <div className="h-1 w-20 bg-primary/20 dark:bg-white/20 mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            I create educational content focused on banking, insurance, and
            personal finance to help others understand complex financial
            concepts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play className="h-6 w-6 text-red-600 fill-red-600" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/REPLACE_WITH_ACTUAL_CHANNEL_ID",
                "_blank"
              )
            }
          >
            <Youtube className="h-5 w-5 mr-2" /> Visit My YouTube Channel
          </Button>
          <div className="flex justify-center gap-6 mt-8">
            <motion.div
              className="glass-card py-3 px-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-lg font-bold">15+</p>
              <p className="text-sm text-muted-foreground">Videos</p>
            </motion.div>
            <motion.div
              className="glass-card py-3 px-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-lg font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Subscribers</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* YouTube Video Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl bg-background/95 backdrop-blur-sm border border-primary/10">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">
              {selectedVideo?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              {selectedVideo && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {selectedVideo && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {selectedVideo.duration} minutes
                </p>
                <p className="text-muted-foreground">
                  {selectedVideo.description}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default YouTubeSection;
