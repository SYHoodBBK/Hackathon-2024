# VisuAIise - Frontend

## Table of Contents

- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Design Prototype Ideas](#Design Prototype Ideas)
- [List of Files](#list-of-files)
- [App Design \- Technical Feasibility](#App Design \- Technical Feasibility)
- [Contributors](#contributors)
- [List of references](#List of references)

## Introduction

**Problem Statement 3 \- Bringing the Australian AI Ethics Principles to Life**

**Team Name \-** Hidden Blue T1  
**Team Members:** Chris LIANG, Haoxuan LU, Jingcheng LIU, Tianyu ZENG  
**Figma Design Link: ** https://www.figma.com/design/bCdQChU0m3sczzPSQSibUD/Prototype?node-id=0-1&t=ks6OQJ24uq9m17sW-1

**App Name \-** **VisuAIise**

**App Concept** \- AI-Driven Vision-Based Navigation App for Vision Impairment Group and the Elderly, with Voice Assistant and Native Accessibility Controls

**Background**  
    In today's rapidly advancing technological landscape of the AI era, while navigation apps with smart routing have become indispensable tools for many people, a significant portion of the population — specifically vision-impaired individuals and the elders — still face challenges that standard navigation solutions do not adequately address.  
    For example, many blind individuals rely on guide dogs for mobility, but in certain scenarios, such as restaurants, candy shops, or other places where pets are not allowed, they may encounter restricted access. These restrictions not only hinder their ability to travel independently but also lead to unfair treatment in daily life, limiting their freedom of movement and autonomy.  
    On the other hand, as younger generations are concerned about the health of our elderly family members, we must recognize that Alzheimer's disease and cognitive decline are growing concerns. This immutable social phenomenon often causes the elderly to become disoriented even in familiar surroundings, raising the possibility that the elders in our lives may one day get lost too.   
    These realities highlight the need for better, more inclusive navigation solutions tailored to their needs, and for the broader groups such as the vision-impaired people. Recognizing the technology gap and the known issues, our app emerges as an AI-driven navigation app with accessible controls designed to empower these vulnerable groups, enhancing their independence and safety in everyday journeys and bringing those ethics principles to life.

## System Requirements

- **Operating System**: [Windows 10]
- **Node.js**
- **npm/npx**
- **expo**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SYHoodBBK/Hackathon-2024.git
   ```

2. Navigate to the project directory:

   ```bash
   cd VisuAIise
   ```

3. Install the required packages:

   ```bash
   npm install expo
   ```

4. Start the application:

   ```bash
   npx expo start
   ```

## List of Files

- **App Components**: Organized in directories like `app/`, `app/(tabs)`.
- **Assets**: Fonts and images in the `assets` directory.
- **Components**: Custom components in the `components` directory.

## Design Prototype Ideas

### Current Ethics Issues and Aids   

**Lack of Inclusivity and Fairness**  
*“... AI Systems should be inclusive and accessible, and should not involve or result in unfair discrimination against individuals, communities or groups.”[^1]*  
    Many navigation apps fail to account for the elderly and vision-impaired, leading to exclusion from reliable navigation tools. For instance, an elderly person may struggle with complex interfaces. Our app solves this by offering simplified navigation with large icons and voice commands, ensuring these users can navigate independently and confidently. Another example is the current navigation app BlindSquare. While it advertises itself as the largest navigation app for blind people, it supports only a limited range of languages, excluding widely used ones like Chinese and Hindi. This oversight prevents thousands, if not millions, of disadvantaged users from accessing the app, ultimately undermining fairness and inclusivity.

**Accessibility Issues (Human/Social Wellbeing and Human-Centred Value)**  
*“... AI systems should benefit individuals, society and the environment… should respect human rights, diversity, and the autonomy of individuals.”1*  
Existing apps don't provide intuitive instructions for users with disabilities. A vision-impaired person might miss important details like obstacles or intersections. Our app addresses this by providing voice-guided, real-time feedback on surroundings and tactile alerts, improving their daily navigation and overall quality of life.

**Insufficient Reliability and Safety**  
*“AI systems should reliably operate in accordance with their intended purpose.”[^2]*  
    Vulnerable users, like those with cognitive impairments, are at risk when apps provide unreliable guidance. For example, an elderly user who gets lost in familiar surroundings could face serious safety concerns. Our app ensures accurate, real-time directions and provides family notifications if the user deviates from their route, enhancing safety and peace of mind. Moreover, unlike complex solutions that depend on cloud computing for object recognition, our approach processes recognition directly on the device, delivering real-time results with enhanced reliability while safeguarding data through local processing, thus eliminating the need to transmit sensitive information externally.

### Possible Scenarios of Use  

**\- Vision Impaired Group**  
    Vision-impaired users can activate the voice-guided navigation. The app provides detailed auditory instructions, alerts upcoming intersections, warns about temporary obstacles like construction zones, and even informs when there's a change in pavement texture. AI Voice Assistant can be easily invoked (e.g. saying a keyword or short pressing on lock-screen button) for users asking questions on surrounding environments,  in plain language As they walk to a destination, the app becomes the trusted guide, enhancing users’ confidence and minimizing the constant worry of navigation challenges.

**\- The Elderly**  
    A 75-year-old retiree, he enjoys his daily walks around the neighborhood. However, his family often worries about his well-being, especially if he decides to explore new areas or if he forgets his way home due to mild cognitive impairment. Using VisuAIise, routes optimized for elders would be auto recommended, which include well-lit paths with benches for rest. The app's interface features large icons and simple instructions, making it easy for him to use. Meanwhile, his daughter receives gentle notifications about his location and progress, giving her peace of mind without infringing on his independence. One afternoon, when John feels slightly disoriented, SafePath promptly redirects him back home, ensuring his safety and preserving his dignity.

### Goal of the Application  

​    The goal of the app is to provide an AI-driven navigation solution that enhances accessibility and safety for vulnerable populations, specifically the vision-impaired and the elderly. By offering intuitive, user-friendly features such as voice-guided navigation, vision-based obstacle detection, route optimization, and real-time updates, the app empowers these users to navigate independently while addressing their unique challenges. Additionally, the app promotes inclusivity and fairness by closing the technology gap, ensuring that all users have access to reliable and supportive navigation tools tailored to their needs.

## App Design \- Technical Feasibility

**Figma Design Link: ** https://www.figma.com/design/bCdQChU0m3sczzPSQSibUD/Prototype?node-id=0-1&t=ks6OQJ24uq9m17sW-1

**KEYWORDS: Computer Vision, Natural Language Processing, Dynamic Routing**

**Object Recognition, Direction, and Distance Detection**

1. **Object Recognition & Road Detection:** The app can utilise pre-trained computer vision algorithms, such as YOLOv8, an open-source object recognition model, or Apple Vision Framework for iOS development process real-time environment information. This functionality accurately identifies and communicates environmental details such as obstacles, pedestrian paths,  traffic signals to users in real-time. Additionally, the app recognizes any potential warning signs and road hazardous signals like potholes and water puddles , ensuring users are alerted to dangers in their surroundings, enhancing both safety and confidence during navigation. This function can greatly improve mobility for vulnerable groups, especially in underdeveloped areas.

   ![1](/Image/1.gif)
   																				**YOLOv8**[^3] 
   Taking a step forward, our solution can also detect current Navilens QR Codes and provide suitable and more accurate instructions to users without the need to modify existing infrastructure. 

2. **Direction Sensing**: Combines data from the device's gyroscope and compass to accurately determine the user's direction relative to their surroundings.   

3. **Distance Detection:** Implying stereo vision or LiDAR sensors to calculate the distance to detected objects, leading to a precise navigation. In scenarios where only monocular vision is available, depth estimation models like MonoDepth2 are used.

   ![2](/Image/2.png)
   																		**MonoDepth2** [^4]

**Language Model Integration**  
The integration of Language Model is aiming to address the issue of app interaction barriers for people with disabilities. The basic function includes: processing user commands and generating natural language audio feedback.

1. **Command Input**  
   The language model interprets natural language commands from users, such as “Go home” or “Find the nearest café”, converting them into actionable navigation queries.  
   
   **Implementation**: Uses pre-trained Natural Language Processing Models or LLM to understand user intents and translating spoken instructions into structured queries.

2. **Audio Output**   
   The language model generates clear, contextually relevant audio messages based on information detected by the computer vision and LiDAR systems. It converts visual data into verbal instructions or descriptions, helping the user navigate the environment.  
   
   **Text-to-Speech (TTS)**: The generated text is converted into speech using TTS systems such as Google Text-to-Speech or Microsoft Azure Speech Service, providing clear and natural-sounding audio feedback.  
   
3. **Multi-language Support**

	By integrating multi-language support through OpenAI’s ChatGPT speech API, our solution     can cater to a diverse global audience, advancing equal mobility rights and ensuring accessibility for users across all nations.

**Optimized Map for Vision Impaired and Elderly Users**  
Map prioritizes routes with barrier-free facilities such as ramps, elevators, and wide walkways. The map is designed to avoid steps, narrow paths, and other potential hazards, providing the safest and most convenient route for the user.

1. **Barrier-Free Facilities Database:** The map integrates data on accessible facilities sourced from local authorities, open data platforms, and community contributions.

2. **Dynamic Route Planning:** The system dynamically adjusts routes based on real-time data, user preferences, and feedback, ensuring the most suitable path for each user.  
   

**Guardian Monitoring**  
Guardians can monitor the user’s real-time location

1. **Real-Time Location Sharing**: The app securely shares the user’s location with guardians, guaranteeing their security and the ability to intervene if needed.  
   
2. **Emergency Alerts**: Sends real-time notifications to guardians and emergency contacts if the SOS feature is activated, including the user’s location and a brief description of the situation.

**SOS Emergency Feature**  
Provides a straightforward way for users to activate an emergency mode via voice commands or a dedicated button, sending alerts and real-time images to guardians or emergency services.

1. **Activation Methods:** The SOS mode can be triggered by voice command or by pressing a physical button on the device.  
   
2. **Emergency Response:** Sends the user’s GPS coordinates, real-time images, and a brief audio message to pre-specified contacts and emergency services, enabling a quick response.  
   

**Continuous Feedback and Route Optimization**

**Machine Learning for Optimization:** Analyzes feedback data and the frequently used walking routes to adjust route planning algorithms and improve future navigation experiences.

### Technical Feasibility \- Appendix

**UI Design Components**   
		**Start Scene1			 Start Scene 2			   Map Scene**			  **Map Feedback**				 **Settings**

![3](/Image/3.png)

**Use Case Diagram**

![4](/Image/4.png)

**Architecture Design Diagram**

![5](/Image/5.png)

## Contributors

- Jingcheng Liu
- Chris LIANG
- Haoxuan LU
- Tianyu ZENG

## List of references

[^1]:  [*https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework/australias-ai-ethics-principles*

[^2]:  [*https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework/australias-ai-ethics-principles*](https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework/australias-ai-ethics-principles)

[^3]:  [https://miro.medium.com/v2/resize:fit:1100/format:webp/1\*piYcnwOOt\_RTMlOX0iKEbQ.gif](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*piYcnwOOt_RTMlOX0iKEbQ.gif)

[^4]:  [https://repository-images.githubusercontent.com/184593965](https://repository-images.githubusercontent.com/184593965/1d3e0500-6cf2-11e9-8a90-7fbed404dc88)
