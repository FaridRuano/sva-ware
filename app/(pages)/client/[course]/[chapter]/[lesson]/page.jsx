'use client'
import { courses } from '@/data/courses'
import { useSession } from '@node_modules/next-auth/react';
import CourseAccessGuard from '@public/components/client/CourseAccessGuard';
import CourseWindow from '@public/components/client/CourseWindow';
import Sidebar from '@public/components/client/SideBar'
import React, { useState } from 'react'

const PRODUCT_ID = '6835b3c233e033e24646b523';

const Course = ({ params }) => {

  const { data: session } = useSession();

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
    <CourseAccessGuard productId={PRODUCT_ID} userEmail={session?.user?.email}>
      <div className="client-courses-container">
        <div className='courses-page'>
          <Sidebar course={course} title={courseData.title} chapters={courseData.chapters} activeChapter={chapter} activeLesson={lesson} />
          <CourseWindow data={activeLessonData} goToNextLesson={nextLesson} />
        </div>
      </div>
    </CourseAccessGuard>
  );
};

export default Course
