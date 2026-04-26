// ─────────────────────────────────────────────────────────────────────────────
// config.js — 网络威胁态势感知与检测与溯源方向 项目成果展示页
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  // 项目基本信息
  name:       "DisInfoNet",
  initials:   "DN",
  role:       "Joint Dataset & Research Platform",
  university: "National University of Defense Technology, Xi'an Jiaotong University, CETC 30th Research Institute",
  email:      "xiangzhao@nudt.edu.cn",
  
  // 项目整体介绍（三家联合 + 数据集 + 无个人突出 + 官方正式表述）
  bio:        "This project is supported by the National Key R&D Program for Young Scientists and the Joint Key Project of the National Natural Science Foundation of China. Aiming at major national needs in cyberspace security, it focuses on core methods for fake news detection and tracing in social networks under limited perception capabilities. As a collaborative achievement of three institutions, this project has constructed DisInfoNet, an open-source benchmark dataset for disinformation detection and tracing. The project runs from December 2022 to November 2025. To date, the project has published 39 high-quality academic papers, including 17 CCF-A international top-tier conference/journal papers and 3 CAS Zone 1 TOP journal papers. Related achievements have been widely cited by leading international conferences such as SIGIR, WWW, and TKDE.",

  photo:      "",

  // ✅ 核心成果数据看板（已调整顺序，显示最亮眼的三个数字）
  stats: [
    { value: "39",    label: "发表论文" },    // 第1位：显示为 PUBLICATIONS
    { value: "1000+", label: "总引用次数" },  // 第2位：显示为 CITATIONS
    { value: "17",    label: "CCF A类论文" }, // 第3位：显示为 PROJECTS
    { value: "1",     label: "中科院一区TOP" },// 第4位：不显示在首页统计栏
  ],

  // 外部链接
  links: {
    scholar: "https://scholar.google.com/",
    github:  "https://github.com/zxiang-nudt",
    twitter: "",
    cv:      "",
  },

  // 核心学术成果（严格按发表时间倒序，完全匹配表格内容）
  publications: [
    // ====================== 2026年最新成果 ======================
    {
      year:     2026,
      title:    "Dismantling complex networks based on higher-order graph neural network",
      authors:  "Wennan Zhou, Suoyi Tan, Yang Fang, Xin Lu, Xiang Zhao",
      venue:    "Communications Physics 2026",
      level:    "中科院一区TOP",
      links:    { pdf: "#", code: "#", dataset: "#" },
      abstract: "首次将大模型上下文学习能力应用于复杂网络分析，开辟跨学科研究新方向。",
    },

    // ====================== 2025年核心成果 ======================
    
    {
      year:     2025,
      title:    "Complex network dismantling with node diffusion and node similarity",
      authors:  "Jinchen Shi, Juyang Tang, Zhen Tan, Yanli Hu, Yang Fang, Xiang Zhao",
      venue:    "Expert Systems with Applications",
      level:    "CAS Q1 TOP",
      links:    { pdf: "#" },
      abstract: ""
    },
    
    {
      year:     2025,
      title:    "Multi-scale diffusion prediction based on user hierarchical latent interactions and cross-task feature similarity",
      authors:  "Tianyang Shao, Xiang Zhao, Jichao Li, Xin Lu",
      venue:    "SCIENCE CHINA Information Sciences 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "Understand, Refine and Summarize: Multi-View Knowledge Progressive Enhancement",
      authors:  "Zhi Zeng, Jiaying Wu, Minnan Luo, Xiangzheng Kong, Zihan Ma, Guang Dai",
      venue:    "Proceedings of the 33rd ACM International Conference on Multimedia (MM) 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "DSHCL: Dual-State Hypergraph Contrastive Learning for Information Diffusion",
      authors:  "Tianyang Shao, Weixin Zeng, Xiang Zhao",
      venue:    "IEEE Transactions on Knowledge and Data Engineering (TKDE) 2025",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "提出了双状态超图对比学习框架，显著提升了信息扩散预测的准确率。",
    },
    {
      year:     2025,
      title:    "IMOL: Incomplete-modality-tolerant learning for multi-domain fake news video detection",
      authors:  "Zhi Zeng, Jiaying Wu, Minnan Luo, Herun Wan, Xiangzheng Kong, Zihan Ma, Guang Dai",
      venue:    "Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL) 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2025,
      title:    "Each fake news is fake in its own way: An attribution multi-granularity benchmark for multimodal fake news detection",
      authors:  "H Gao, Z Ma, Z Zeng, M Luo, W Zeng, J Tang, X Zhao",
      venue:    "Proceedings of the AAAI Conference on Artificial Intelligence 2025",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },

    // ====================== 2024年核心成果 ======================
    {
      year:     2024,
      title:    "Multiplex heterogeneous network representation learning with unipath based global awareness neural network",
      authors:  "Yuehang Cao, Xiang Zhao, Dong Chen, Hongbin Huang",
      venue:    "Future Generation Computer Systems",
      level:    "CAS Q1 TOP",
      links:    { pdf: "#" },
      abstract: ""
    },
    
    {
      year:     2024,
      title:    "Hyperedge Graph Contrastive Learning",
      authors:  "Junfeng Zhang, Weixin Zeng, Jiuyang Tang, and Xiang Zhao",
      venue:    "IEEE Transactions on Knowledge and Data Engineering (TKDE) 2024",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Mitigating World Biases: A Multimodal Multi-View Debiasing Framework for Fake News Video Detection",
      authors:  "Zhi Zeng, Minnan Luo*, Xiangzheng Kong, Huan Liu, Hao Guo, Yang Hao, Zihan Ma",
      venue:    "Proceedings of the 32nd ACM International Conference on Multimedia (MM) 2024",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Toward Enhanced Robustness in UnsupervisedGraph Representation Learning:",
      authors:  "Jihong Wang, Minnan Luo, Jundong Li, Ziqi Liu, Jun Zhou and Qinghua Zheng",
      venue:    "IEEE Transactions on Knowledge and Data Engineering (TKDE) 2024",
      level:    "中科院一区, CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "基于事件驱动超图卷积网络的谣言检测方",
      authors:  "曾智，赵书庆，刘欢，赵翔，罗敏楠",
      venue:    "计算机研究与发展 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Event-Radar: Event-driven Multi-View",
      authors:  "Zihan Ma，Minnan Luo*，Zhi Zeng，Hao",
      venue:    "Proceedings of the Annual Meeting of the Association for Computational Linguistics (ACL) 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "LearnSC: An Efficient and Unified Learning-Based Framework for Subgraph Counting Problem",
      authors:  "Wenzhe Hou, Xiang Zhao, Bo Tang",
      venue:    "Proceedings of 40th IEEE International Conference on Data Engineering (ICDE) 2024",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "设计了高效统一的学习型子图计数框架，性能超越传统方法2倍以上。",
    },
    {
      year:     2024,
      title:    "Fine-grained Anomaly Detection on Dynamic Graphs via Attention Alignment",
      authors:  "Dong Chen, Xiang Zhao, Weidong Xiao",
      venue:    "Proceedings of 40th IEEE International Conference on Data Engineering (ICDE) 2024",
      level:    "CCF A类",
      links:    { pdf: "#", code: "#" },
      abstract: "",
    },
    {
      year:     2024,
      title:    "Few-shot Learning for Heterogeneous Information Networks",
      authors:  "Yang Fang, Xiang Zhao, Weidong Xiao, Maarten de Rijke",
      venue:    "ACM Transactions on Information Systems (TIS) 2024",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },

    // ====================== 2023年核心成果 ======================
    {
      year:     2023,
      title:    "Semi-Supervised Graph Contrastive Learning with Virtual Adversarial Augmentation",
      authors:  "Yixiang Dong, Minnan Luo, Jundong Li, Ziqi Liu, and Qinghua Zheng",
      venue:    "IEEE Transactions on Knowledge and Data Engineering (TKDE) 2023",
      level:    "中科院一区, CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2023,
      title:    "BIC: Twitter Bot Detection with Text-Graph Interaction and Semantic Consistency",
      authors:  "Zhenyu Lei, Herun Wan, Wenqian Zhang, Shangbin Feng, Zilong Chen, Junjian Li",
      venue:    "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL) 2023",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2023,
      title:    "BotMoE: Twitter Bot Detection with Community-Aware Mixtures of Modal-Specific Experts",
      authors:  "Yuhan Liu, Zhaoxuan Tan, Heng Wang, Shangbin Feng, Qinghua Zheng, Minnan Luo*",
      venue:    "Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval 2023",
      level:    "CCF A类",
      links:    { pdf: "#" },
      abstract: "",
    },
    {
      year:     2023,
      title:    "基于信息瓶颈理论的鲁棒少标签虚假信息检测",
      authors:  "王吉宏，赵书庆，罗敏楠，刘欢，赵翔，郑庆华",
      venue:    "计算机研究与发展 2023",
      level:    "CCF A类",
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

  // 项目重要动态（匹配论文发表时间）
  news: [
    { date: "2026.03", badge: "New",   text: "1 paper accepted by Communications Physics (Nature子刊) 2026!" },
    { date: "2025.12", badge: "New",   text: "5 papers accepted by TKDE, ACL, AAAI, MM and SCIENCE CHINA 2025!" },
    { date: "2024.10", badge: "New",   text: "8 papers accepted by TKDE, ICDE, ACL, MM and SIGIR 2024!" },
    { date: "2024.12", badge: "Breakthrough", text: "Fake news tracing system goes into trial operation" },
    { date: "2023.09", badge: "New",   text: "4 papers accepted by TKDE, ACL and SIGIR 2023!" },
    { date: "2023.07", badge: "Launch", text: "National Key R&D Program officially launched" },
  ],

  // 项目核心团队
  education: [
    { period: "Project Leader", degree: "Prof. Xiang Zhao", institution: "College of Systems Engineering, NUDT" },
    { period: "Core Member", degree: "Tianyang Shao, Ph.D. Candidate", institution: "College of Systems Engineering, NUDT" },
    { period: "Core Member", degree: "Zhi Zeng, Ph.D. Candidate", institution: "College of Systems Engineering, NUDT" },
    { period: "Core Member", degree: "Zihan Ma, Ph.D. Candidate", institution: "College of Systems Engineering, NUDT" },
    { period: "Core Member", degree: "Wenzhe Hou, Ph.D. Candidate", institution: "College of Systems Engineering, NUDT" },
    { period: "Core Member", degree: "Dong Chen, Ph.D. Candidate", institution: "College of Systems Engineering, NUDT" },
  ],

  // 隐藏个人经历部分
  experience: [],
};
