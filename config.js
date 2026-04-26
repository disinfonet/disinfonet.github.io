// ─────────────────────────────────────────────────────────────────────────────
// config.js — 网络威胁态势感知与检测与溯源方向 项目成果展示页
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  // 项目基本信息
  name:       "Zhao Lab",
  initials:   "ZL",
  role:       "Xiang Zhao Research Group",
  university: "NUDT",
  email:      "xiangzhao@nudt.edu.cn",
  
  // 项目整体介绍（突出核心成效）
  bio:        " This project is supported by the National Key R&D Program for Young Scientists and the Joint Key Project of the National Natural Science Foundation of China. Aiming at major national needs in cyberspace security, it focuses on core methods for fake news detection and tracing in social networks under limited perception capabilities. The project is led by Professor Xiang Zhao's research team at the College of Systems Engineering, National University of Defense Technology, and runs from December 2022 to November 2025.To date, the project has published 39 high-quality academic papers, including 17 CCF-A international top-tier conference/journal papers and 1 CAS Zone 1 TOP journal paper. The related achievements have been widely cited by leading international conferences such as SIGIR, WWW, and TKDE, providing important theoretical and technical support for the construction of China's cyberspace fake news governance system.",
  photo:      "",   // 可选：上传项目logo或团队合影

  // 核心成果数据看板（一眼看到成效）
  stats: [
    { value: "39",  label: "发表论文" },
    { value: "17",   label: "CCF A类论文" },
    { value: "1",    label: "中科院一区TOP" },
    { value: "1000+", label: "总引用次数" },
  ],

  // 外部链接
  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/zxiang-nudt",
    twitter: "",          // 留空自动隐藏
    cv:      "",
  },

  // 核心学术成果（按年份倒序，CCF A类/一区TOP优先）
  publications: [
    // 2025年 最新成果
    {
      year:     2025,
      title:    "DRSKL: Dual-State Hypergraph Contrastive Learning for Information Diffusion",
      authors:  "Tianyang Shao, Wentao Xiao, Xiang Zhao",
      venue:    "IEEE Transactions on Knowledge and Data Engineering (TKDE) 2025",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "提出了双状态超图对比学习框架，显著提升了信息扩散预测的准确率。",
    },
    {
      year:     2025,
      title:    "Multi-scale diffusion prediction based on hierarchical interactions and non-stationary augmentations",
      authors:  "Tianyang Shao, Xiang Zhao, Jichao Li, Nu Lu",
      venue:    "SCIENCE CHINA Information Sciences 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "LoRAR: An Efficient and Unified Learning-based Learned Index for Range Queries",
      authors:  "Wentao Hu, Xiang Zhao, Bo Tang",
      venue:    "IEEE International Conference on Data Engineering (ICDE) 2025",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "设计了高效统一的学习型范围查询索引，性能超越传统B+树2倍以上。",
    },
    {
      year:     2025,
      title:    "MUSE: Modelling Graph Knowledge into Language Model for Graph-to-Text Deployment",
      authors:  "Zijian Cai, Zhaonan Tao, Zhengya Xiao, Ziling Zhu, Zhengyu Wang, Qiaoyu Lei",
      venue:    "The Web Conference (WWW) 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "Now-Tolerant Learning for Audio-Visual Action Recognition",
      authors:  "Huachen Han, Qinghua Zheng, Minran Luo, Weixin Zeng, Jiuyang Tang, Xiang Zhao",
      venue:    "AAAI Conference on Artificial Intelligence 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "基于深度强化学习的鲁棒多步虚假信息溯源",
      authors:  "王俞安, 赵怀欣, 罗敏楠, 何欢, 赵翔",
      venue:    "计算机研究与发展 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "Node Importance Estimation with Multiplicative Graph Representation",
      authors:  "Li Hua, Wenzuo Zeng, Zhao Tan, Weidong Wang",
      venue:    "Information Sciences 2025",
      level:    "中科院一区TOP",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "Fine-grained Anomaly Detection on Dynamic Graphs with Attention Allocation",
      authors:  "Deep Chen, Wenbo Zhu, Weiduo Xiao",
      venue:    "IEEE International Conference on Data Mining (ICDM) 2025",
      level:    "CCF B类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "Learning Multimodal Attention Mask with Frequency Domain Information for Deepfake Detection",
      authors:  "Zihan Ma, Han Liao, Zizhe Zhu, Zhao Gao, Xing Li",
      venue:    "IEEE International Conference on Multimedia and Expo (ICME) 2025",
      level:    "CCF B类",
      links:    { pdf: "#" },
      abstract: "",
    },

    // 2024年 核心成果
    {
      year:     2024,
      title:    "Mitigating the Importance of Prepositions during Fake News Spread",
      authors:  "Huiwen Wan, Ningyuan Wang, Xiang Zhao, Bin Li, Ha Yang, Mengnan Luo",
      venue:    "International ACM SIGIR Conference on Research and Development in Information Retrieval 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Backdoor-Tolerant Detection with Community-Aware Mixtures of Model-Specific Experts",
      authors:  "Shangbin Fang, Qinghua Zheng, Minran Luo",
      venue:    "International ACM SIGIR Conference on Research and Development in Information Retrieval 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Ever-Radar: Event-driven Multi-View Malware Detection Framework for Fake News Video Detection",
      authors:  "Zhi Zeng, Han Lin, Hu Gao, Yang Jiao, Xiangyang Kong, Jian Li, Hao Gao, Yang Luo",
      venue:    "AAAI Conference on Artificial Intelligence 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "PRIME: Predicting Probability and Route-Macro Representation for Information Diffusion",
      authors:  "Nuan Shao, Jiaoyang Tang, Yang Zhao, Tianyang Shao, Junbo Zhang",
      venue:    "International Conference on Information and Knowledge Management (CIKM) 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Information Diffusion Prediction based on User Multi-Dimensional Feature Interaction",
      authors:  "Jiaxing He, Yang Fang, Tianyang Shao, Wang Zhao",
      venue:    "International Conference on Information and Knowledge Management (CIKM) 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Risk Awareness and Prediction of False Information Propagation from the Perspective of Metrics",
      authors:  "Dongyuan Fan, Yang Fang, Tianyang Shao, Jiayang Fang",
      venue:    "IEEE Transactions on Knowledge and Data Engineering (TKDE) 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "基于自监督进化的鲁棒多步虚假信息溯源",
      authors:  "王俞安, 赵怀欣, 罗敏楠, 何欢, 赵翔",
      venue:    "计算机研究与发展 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Node Importance Estimation with Multiplicative Graph Representation",
      authors:  "Li Hua, Wenzuo Zeng, Zhao Tan, Weidong Wang",
      venue:    "Information Sciences 2024",
      level:    "中科院一区TOP",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Detecting complex networks based on node direction",
      authors:  "Wentian Shi, Keji Yang, Yaping Yang, Xinxin Li, Xiao Zhao",
      venue:    "中科院一区TOP期刊",
      level:    "中科院一区TOP",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Multimodal learning with improved graph representation based on graph neural network",
      authors:  "Huachen Cai, Ming Zhang, Dong Chen, Haoyang Han, Yuhang Wang, Mingjun Liu",
      venue:    "中科院一区TOP期刊",
      level:    "中科院一区TOP",
      links:    { pdf: "#" },
      abstract: "",
    },
  ],

  // 项目系统与平台
  projects: [
    {
      name: "网络威胁实时检测系统",
      desc: "基于深度学习的实时网络入侵检测系统，准确率达99.2%，支持百万级流量并发处理。",
      tags: ["Python", "PyTorch", "TensorFlow"],
      url:  "#",
    },
    {
      name: "虚假信息溯源平台",
      desc: "支持多平台虚假信息传播路径追踪与溯源分析，定位准确率达95%以上。",
      tags: ["Java", "Spring Boot", "Neo4j"],
      url:  "#",
    },
    {
      name: "网络态势感知可视化系统",
      desc: "大规模网络安全态势实时监控与可视化平台，支持多维度数据分析与预警。",
      tags: ["Vue.js", "D3.js", "Kafka"],
      url:  "#",
    },
  ],

  // 项目重要动态
news: [
    { date: "2025.03", badge: "New",   text: "3 papers accepted by TKDE, ICDE, and WWW 2025!" },
    { date: "2025.01", badge: "Milestone", text: "Total CCF-A papers exceed 15" },
    { date: "2024.12", badge: "Breakthrough", text: "Fake news tracing system goes into trial operation" },
    { date: "2024.05", badge: "New",   text: "4 papers accepted by SIGIR and AAAI 2024!" },
    { date: "2023.07", badge: "Launch", text: "National Key R&D Program officially launched" },
  ],

  // 项目核心团队
  education: [
    { period: "Project Leader", degree: "Prof. Xiang Zhao", institution: "College of Systems Engineering, National University of Defense Technology" },
    { period: "Core Member", degree: "Wentao Xiao, Ph.D. Candidate", institution: "College of Systems Engineering, National University of Defense Technology" },
    { period: "Core Member", degree: "Tianyang Shao, Ph.D. Candidate", institution: "College of Systems Engineering, National University of Defense Technology" },
    { period: "Core Member", degree: "Jiaxing He, Ph.D. Candidate", institution: "College of Systems Engineering, National University of Defense Technology" },
    { period: "Core Member", degree: "Zijian Cai, Ph.D. Candidate", institution: "College of Systems Engineering, National University of Defense Technology" },
    { period: "Core Member", degree: "Huachen Han, Ph.D. Candidate", institution: "College of Systems Engineering, National University of Defense Technology" },
  ],
  ],

  // 隐藏个人经历部分
  experience: [],
};
