import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../componenets/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../componenets/ui/avatar";
import { Badge } from "../componenets/ui/badge";
import { Button } from "../componenets/ui/button";
import {
  Eye,
  MessageSquare,
  Phone,
  Calendar,
  BarChart2,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

const InternList = ({
  interns = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.j@example.com",
      avatar: "https:/api.dicebear.com/7.x/avataaars/svg?seed=alex",
      program: "Full Stack Development",
      progress: 68,
      status: "on-track",
      nextAssessment: "2023-06-15",
      pendingTasks: 3,
      completedTasks: 12,
      lastSubmission: "2023-06-10",
      track: "Technical Engineering",
      isPaid: true,
    },
    {
      id: "2",
      name: "Samantha Lee",
      email: "samantha.l@example.com",
      avatar: "https:/api.dicebear.com/7.x/avataaars/svg?seed=samantha",
      program: "Sales & Marketing",
      progress: 42,
      status: "at-risk",
      nextAssessment: "2023-06-18",
      pendingTasks: 5,
      completedTasks: 8,
      lastSubmission: "2023-06-05",
      track: "MBA",
      isPaid: false,
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "michael.c@example.com",
      avatar: "https:/api.dicebear.com/7.x/avataaars/svg?seed=michael",
      program: "Full Stack Development",
      progress: 25,
      status: "behind",
      nextAssessment: "2023-06-20",
      pendingTasks: 7,
      completedTasks: 5,
      lastSubmission: "2023-05-28",
      track: "Technical Engineering",
      isPaid: true,
    },
    {
      id: "4",
      name: "Priya Patel",
      email: "priya.p@example.com",
      avatar: "https:/api.dicebear.com/7.x/avataaars/svg?seed=priya",
      program: "Data Science",
      progress: 85,
      status: "on-track",
      nextAssessment: "2023-06-25",
      pendingTasks: 1,
      completedTasks: 15,
      lastSubmission: "2023-06-12",
      track: "Technical Engineering",
      isPaid: true,
    },
    {
      id: "5",
      name: "David Wilson",
      email: "david.w@example.com",
      avatar: "https:/api.dicebear.com/7.x/avataaars/svg?seed=david",
      program: "Business Development",
      progress: 50,
      status: "at-risk",
      nextAssessment: "2023-06-22",
      pendingTasks: 4,
      completedTasks: 9,
      lastSubmission: "2023-06-08",
      track: "MBA",
      isPaid: false,
    },
  ],
  onViewProfile = () => {},
  onSendMessage = () => {},
  onScheduleCall = () => {},
  onViewProgress = () => {},
}) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInterns = interns.filter((intern) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "on-track" && intern.status === "on-track") ||
      (filter === "at-risk" && intern.status === "at-risk") ||
      (filter === "behind" && intern.status === "behind") ||
      (filter === "paid" && intern.isPaid) ||
      (filter === "free" && !intern.isPaid);

    const matchesSearch =
      intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.program.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "on-track":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            On Track
          </Badge>
        );
      case "at-risk":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            At Risk
          </Badge>
        );
      case "behind":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            Behind
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "on-track":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "at-risk":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "behind":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Assigned Interns</h2>
          <p className="text-gray-500 mt-1">
            Manage and track your assigned interns' progress
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search interns..."
              className="px-4 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Interns</option>
            <option value="on-track">On Track</option>
            <option value="at-risk">At Risk</option>
            <option value="behind">Behind</option>
            <option value="paid">Paid Mentorship</option>
            <option value="free">Free Internship</option>
          </select>
        </div>
      </div>

      {filteredInterns.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No interns match your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterns.map((intern) => (
            <Card
              key={intern.id}
              className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={intern.avatar} alt={intern.name} />
                      <AvatarFallback>
                        {intern.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{intern.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {intern.email}
                      </CardDescription>
                    </div>
                  </div>
                  {getStatusIcon(intern.status)}
                </div>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Program:
                    </span>
                    <span className="text-sm">{intern.program}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Track:
                    </span>
                    <span className="text-sm">{intern.track}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Type:
                    </span>
                    <Badge
                      variant={intern.isPaid ? "default" : "outline"}
                      className={intern.isPaid ? "bg-blue-100 text-blue-800" : ""}
                    >
                      {intern.isPaid ? "Paid Mentorship" : "Free Internship"}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Status:
                    </span>
                    {getStatusBadge(intern.status)}
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{intern.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${intern.status === "on-track" ? "bg-green-500" : intern.status === "at-risk" ? "bg-yellow-500" : "bg-red-500"}`}
                        style={{ width: `${intern.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Pending Tasks</div>
                      <div className="font-semibold">{intern.pendingTasks}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Completed</div>
                      <div className="font-semibold">{intern.completedTasks}</div>
                    </div>
                  </div>

                  {intern.nextAssessment && (
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>
                        Next Assessment:{" "}
                        {new Date(intern.nextAssessment).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between pt-2 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewProfile(intern.id)}
                >
                  <Eye className="h-4 w-4 mr-1" /> Profile
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onSendMessage(intern.id)}
                >
                  <MessageSquare className="h-4 w-4 mr-1" /> Message
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewProgress(intern.id)}
                >
                  <BarChart2 className="h-4 w-4 mr-1" /> Progress
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default InternList;
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: (props) => <ChevronLeftIcon className="h-4 w-4" {...props} />,
        IconRight: (props) => <ChevronRightIcon className="h-4 w-4" {...props} />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
