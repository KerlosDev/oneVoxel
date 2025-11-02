'use client';
import React from 'react';
import { motion } from 'motion/react';
import BlurText from './ui/BlurText';
import { HiArrowRight } from 'react-icons/hi';
import CurverLoop from './ui/CurverLoop';

const featuresData = [
    {
        id: 1,
        title: "Custom Software Development",
        description: "Transform your business vision into reality with our cutting-edge custom software solutions. We build scalable, secure, and innovative applications tailored to your unique requirements using the latest technologies.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Development",
        technology: "Full Stack"
    },
    {
        id: 2,
        title: "Cloud Solutions & DevOps",
        description: "Accelerate your digital transformation with our comprehensive cloud infrastructure and DevOps services. From migration to optimization, we ensure your applications run seamlessly in the cloud.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Infrastructure",
        technology: "AWS, Azure, GCP"
    },
    {
        id: 3,
        title: "AI & Machine Learning",
        description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications. Our AI solutions help businesses make data-driven decisions and improve efficiency.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "AI/ML",
        technology: "TensorFlow, PyTorch"
    }
];

const FeatureCard = ({ feature, index, isReverse }) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        hover: {
            x: 5,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-32 ${isReverse ? 'lg:grid-cols-2' : ''
                }`}
        >

            {/* Content Section */}
            <motion.div
                className={`space-y-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}
                initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="space-y-2">
                    <motion.div
                        className="flex items-center space-x-4 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-medium">
                            {feature.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">{feature.technology}</span>
                    </motion.div>

                    <BlurText
                        text={feature.title}
                        className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                        delay={50}
                        animateBy="words"
                    />
                </div>

                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    {feature.description}
                </motion.p>

                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center space-x-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <span>Learn More</span>
                    <motion.div variants={buttonVariants}>
                        <HiArrowRight className="w-5 h-5" />
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className={`${isReverse ? 'lg:order-1' : 'lg:order-2'}`}
                initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                    whileHover="hover"
                >
                    <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 lg:h-80 object-cover"
                        variants={imageVariants}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay with read more hint */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                    >
                        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Explore Feature</span>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Features = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="py-20 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto"
        >
            {/* Section Header */}
            <motion.div
                variants={titleVariants}
                className="text-center font-switzer mb-16 lg:mb-24"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-4"
                >
                    <span className="bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
                        Our Expertise
                    </span>
                </motion.div>

                <BlurText
                    text="Powerful Software Solutions"
                    className="text-4xl text-center justify-center lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                    delay={100}
                    animateBy="words"
                />

                <motion.p
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Discover our comprehensive suite of software development services designed to transform your business and drive innovation in the digital age
                </motion.p>
            </motion.div>

            {/* Feature Cards */}
            <div className="space-y-0">
                {featuresData.map((feature, index) => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                        index={index}
                        isReverse={index % 2 === 1}
                    />
                ))}
            </div>


        </motion.section>
    );
};

export default Features;