import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import privateWorkspace from '@/assets/workspace-private.jpg';
import sharedWorkspace from '@/assets/workspace-shared.jpg';
import meetingRoom from '@/assets/workspace-meeting.jpg';

const workspaces = [
  {
    id: 1,
    title: 'Private Office',
    description: 'Your own dedicated space with premium amenities and complete privacy for focused work.',
    image: privateWorkspace,
    price: 'From $599/month'
  },
  {
    id: 2,
    title: 'Hot Desk',
    description: 'Flexible workspace in our vibrant open area. Perfect for networking and collaboration.',
    image: sharedWorkspace,
    price: 'From $99/month'
  },
  {
    id: 3,
    title: 'Meeting Room',
    description: 'Professional meeting spaces equipped with the latest technology for presentations.',
    image: meetingRoom,
    price: 'From $25/hour'
  }
];

const WorkspaceOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-primary mb-4">Workspace Options</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect workspace solution that matches your needs and working style.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {workspaces.map((workspace, index) => (
            <motion.div
              key={workspace.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="workspace-card flex-shrink-0 w-80 snap-center"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img
                  src={workspace.image}
                  alt={workspace.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="text-center">
                <h3 className="heading-md text-primary mb-3">{workspace.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {workspace.description}
                </p>
                <p className="text-lg font-semibold text-accent mb-6">
                  {workspace.price}
                </p>
                <Button className="btn-navy w-full">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceOptions;