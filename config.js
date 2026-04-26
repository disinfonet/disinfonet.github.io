const USER_CONFIG = {
  // 项目标题
  name: "网络威胁态势感知与检测与溯源方向",
  role: "国防科技大学 高性能数据系统课题组",
  university: "项目编号：2023YFB1006000",
  
  // 项目整体介绍（突出成效）
  bio: `本项目面向国家网络空间安全重大需求，突破了网络威胁检测、溯源与态势感知的核心关键技术。
  累计发表高水平学术论文**30余篇**，其中CCF A类会议/期刊论文**12篇**，中科院一区TOP期刊论文**5篇**，
  相关成果被国际顶级会议广泛引用，为我国网络安全防御体系建设提供了重要的理论和技术支撑。`,

  // 项目亮点数据（放在最前面，一眼看到成效）
  highlights: [
    { number: "30+", label: "发表论文" },
    { number: "12", label: "CCF A类论文" },
    { number: "5", label: "中科院一区TOP" },
    { number: "1000+", label: "总引用次数" }
  ],

  // 核心成果（按重要性排序，CCF A类在前）
  publications: [
    // 子课题一 核心成果
    {
      year: 2025,
      title: "DRSKL: Dual-State Hypergraph Contrastive Learning for Information Diffusion",
      authors: "Tianyang Shao, Wentao Xiao, Xiang Zhao",
      venue: "TKDE 2025",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2025,
      title: "Multi-scale diffusion prediction based on hierarchical interactions and non-stationary augmentations",
      authors: "Tianyang Shao, Xiang Zhao, Jichao Li, Nu Lu",
      venue: "SCIENCE CHINA Information Sciences 2025",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2025,
      title: "LoRAR: An Efficient and Unified Learning-based Learned Index for Range Queries",
      authors: "Wentao Hu, Xiang Zhao, Bo Tang",
      venue: "ICDE 2025",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2025,
      title: "基于深度强化学习的鲁棒多步虚假信息溯源",
      authors: "王俞安, 赵怀欣, 罗敏楠, 何欢, 赵翔",
      venue: "计算机研究与发展 2025",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "PRIME: Predicting Probability and Route-Macro Representation for Information Diffusion",
      authors: "Nuan Shao, Jiaoyang Tang, Yang Zhao, Tianyang Shao, Junbo Zhang",
      venue: "CIKM 2024",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Information Diffusion Prediction based on User Multi-Dimensional Feature Interaction",
      authors: "Jiaxing He, Yang Fang, Tianyang Shao, Wang Zhao",
      venue: "CIKM 2024",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Risk Awareness and Prediction of False Information Propagation from the Perspective of Metrics",
      authors: "Dongyuan Fan, Yang Fang, Tianyang Shao, Jiayang Fang",
      venue: "TKDE 2024",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },

    // 子课题二 核心成果
    {
      year: 2025,
      title: "Fine-grained Anomaly Detection on Dynamic Graphs with Attention Allocation",
      authors: "Deep Chen, Wenbo Zhu, Weiduo Xiao",
      venue: "ICDM 2025",
      level: "CCF B类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Mitigating the Importance of Prepositions during Fake News Spread",
      authors: "Huiwen Wan, Ningyuan Wang, Xiang Zhao, Bin Li, Ha Yang, Mengnan Luo",
      venue: "SIGIR 2024",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Detecting complex networks based on node direction",
      authors: "Wentian Shi, Keji Yang, Yaping Yang, Xinxin Li, Xiao Zhao",
      venue: "中科院一区TOP",
      level: "中科院一区TOP",
      links: { pdf: "#", code: "#" }
    },

    // 子课题三 核心成果
    {
      year: 2025,
      title: "MUSE: Modelling Graph Knowledge into Language Model for Graph-to-Text Deployment",
      authors: "Zijian Cai, Zhaonan Tao, Zhengya Xiao, Ziling Zhu, Zhengyu Wang, Qiaoyu Lei",
      venue: "WWW 2025",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2025,
      title: "Node Importance Estimation with Multiplicative Graph Representation",
      authors: "Li Hua, Wenzuo Zeng, Zhao Tan, Weidong Wang",
      venue: "Information Sciences 2025",
      level: "中科院一区TOP",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Backdoor-Tolerant Detection with Community-Aware Mixtures of Model-Specific Experts",
      authors: "Shangbin Fang, Qinghua Zheng, Minran Luo",
      venue: "ACM SIGIR 2024",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Ever-Radar: Event-driven Multi-View Malware Detection Framework for Fake News Video Detection",
      authors: "Zhi Zeng, Han Lin, Hu Gao, Yang Jiao, Xiangyang Kong, Jian Li, Hao Gao, Yang Luo",
      venue: "AAAI 2024",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },

    // 子课题四 核心成果
    {
      year: 2025,
      title: "Now-Tolerant Learning for Audio-Visual Action Recognition",
      authors: "Huachen Han, Qinghua Zheng, Minran Luo, Gao, Weixin Zeng, Jiuyang Tang, Xiang Zhao",
      venue: "AAAI 2025",
      level: "CCF A类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2025,
      title: "Learning Multimodal Attention Mask with Frequency Domain Information for Deepfake Detection",
      authors: "Zihan Ma, Han Liao, Zizhe Zhu, Zhao Gao, Xing Li",
      venue: "ICME 2025",
      level: "CCF B类",
      links: { pdf: "#", code: "#" }
    },
    {
      year: 2024,
      title: "Node Importance Estimation with Multiplicative Graph Representation",
      authors: "Li Hua, Wenzuo Zeng, Zhao Tan, Weidong Wang",
      venue: "Information Sciences 2024",
      level: "中科院一区TOP",
      links: { pdf: "#", code: "#" }
    }
  ],

  // 项目产出
  projects: [
    {
      name: "网络威胁检测系统",
      desc: "基于深度学习的实时网络入侵检测系统，准确率达99.2%",
      tags: ["Python", "PyTorch", "TensorFlow"],
      link: "#"
    },
    {
      name: "虚假信息溯源平台",
      desc: "支持多平台虚假信息传播路径追踪与溯源分析",
      tags: ["Java", "Spring Boot", "Neo4j"],
      link: "#"
    },
    {
      name: "网络态势感知系统",
      desc: "大规模网络安全态势实时监控与可视化平台",
      tags: ["Vue.js", "D3.js", "Kafka"],
      link: "#"
    }
  ],

  // 团队核心成员
  team: [
    { name: "赵翔", role: "项目负责人/副教授" },
    { name: "肖文韬", role: "核心成员/博士研究生" },
    { name: "邵天扬", role: "核心成员/博士研究生" },
    { name: "何佳星", role: "核心成员/博士研究生" },
    { name: "蔡子健", role: "核心成员/博士研究生" },
    { name: "韩华琛", role: "核心成员/博士研究生" }
  ],

  // 联系方式
  contact: {
    email: "xiang.zhao@nudt.edu.cn",
    github: "https://github.com/zxiang-nudt",
    address: "湖南省长沙市国防科技大学计算机学院"
  }
};
