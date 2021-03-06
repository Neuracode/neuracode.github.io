import React from 'react';
import styles from '../../styles/Courses.module.css';
import CourseHeader from '../../../components/CourseHeader';
import Head from 'next/head';

const JavaDataStructures: React.FC = ({}) => {
    const curriculumList = [
        'Introduction / Review',
        'Time Complexity',
        'Linked List',
        'Stack',
        'Queue',
        'Binary Search Tree',
        'Heap',
        'Hash Table',
    ];

    return (
        <>
            <Head>
                <title>Java Data Structures</title>
            </Head>
            <CourseHeader
                name='Java Data Structures'
                curriculumList={curriculumList}
                about='If you have already learned the basics of Java and are looking to get farther into your computer science journey, then this is the course for you. This course will teach you all of the basic data structures in Java but requires you to have basic knowledge of Java, including knowledge of arrays, array lists, and how a class is structured.'
                startDate='July 8th'
                endDate='August 26th'
                dayAndTime='Saturday, 5:00PM - 6:30PM'
                timeCommitment={3}
                recommendedGrades='8-12'
                prerequisites={['Java Basics']}
            />
        </>
    );
};

export default JavaDataStructures;
