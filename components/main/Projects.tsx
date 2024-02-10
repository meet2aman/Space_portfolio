import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Project } from "../../constants/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Link } from "lucide-react";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-reospec lg:text-6xl tacking-wide font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {Project.map((item: any) => (
          <ProjectCard
            key={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div> */}
      <Carousel className="h-full w-full flex z-20 flex-col md:flex-row gap-10 px-10">
        <CarouselContent className="p-4">
          {Project.map((item: any) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={item.id}>
              <ProjectCard
                id={item.id}
                key={item.id}
                src={item.src}
                title={item.title}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Projects;
