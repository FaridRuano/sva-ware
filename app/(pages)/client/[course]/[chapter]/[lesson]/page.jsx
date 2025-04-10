'use client'
import { courses } from '@/data/courses'
import CourseWindow from '@public/components/client/CourseWindow';
import Sidebar from '@public/components/client/SideBar'
import React, { useState } from 'react'

const Course = ({ params }) => {

  const { course, chapter, lesson } = React.use(params)
  const courseData = courses[course]

  const activeChapterData = courseData.chapters.find(ch => ch._id === parseInt(chapter))
  const activeLessonData = activeChapterData?.lessons.find(ls => ls._id === parseInt(lesson))

  if (!courseData) {
    return <p>Course not found</p>
  }

  const nextLesson = () => {
    // Find the index of the current chapter and lesson
    const chapterIndex = courseData.chapters.findIndex((ch) => ch._id === parseInt(chapter));
    const lessonIndex = activeChapterData?.lessons.findIndex((ls) => ls._id === parseInt(lesson));

    if (lessonIndex !== -1 && lessonIndex < activeChapterData.lessons.length - 1) {
      // Go to the next lesson in the current chapter
      const nextLessonId = activeChapterData.lessons[lessonIndex + 1]._id;
      return `/client/${course}/${chapter}/${nextLessonId}`;
    } else if (chapterIndex !== -1 && chapterIndex < courseData.chapters.length - 1) {
      // If no more lessons in current chapter, go to the first lesson of the next chapter
      const nextChapter = courseData.chapters[chapterIndex + 1];
      const firstLessonId = nextChapter.lessons[0]._id;
      return `/client/${course}/${nextChapter._id}/${firstLessonId}`;
    } else {
      return `/client/${course}/1/101`;
    }
  }

  return (
    <div className="client-courses-container">
      <div className='courses-page'>
        <Sidebar course={course} title={courseData.title} chapters={courseData.chapters} activeChapter={chapter} activeLesson={lesson} />
        <CourseWindow data={activeLessonData} goToNextLesson={nextLesson} />
      </div>
    </div>
  );
};

export default Course
