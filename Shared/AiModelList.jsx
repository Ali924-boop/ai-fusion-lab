export default [
  {
    model: "GPT",
    icon: "/gpt.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "GPT 3.5", premium: false, id: "gpt-3.5-turbo" },
      { name: "GPT 4", premium: true, id: "gpt-4" },
      { name: "GPT 4 Turbo", premium: true, id: "gpt-4-turbo" },
      { name: "GPT 4o", premium: true, id: "gpt-4o" },
      { name: "GPT o1", premium: true, id: "gpt-o1" },
      { name: "GPT o1 Mini", premium: true, id: "gpt-o1-mini" },
      { name: "GPT S", premium: true, id: "gpt-s" },
    ],
  },
  {
    model: "Gemini",
    icon: "/gemini.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "Gemini 2.5 Lite", premium: false, id: "gemini-2.5-flash-lite" },
      { name: "Gemini 2.5 Flash", premium: false, id: "gemini-2.5-flash" },
      { name: "Gemini 2.5 Pro", premium: true, id: "gemini-2.5-pro" },
    ],
  },
  {
    model: "DeepSeek",
    icon: "/deepseek.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "DeepSeek R1", premium: false, id: "DeepSeek-R1" },
      { name: "DeepSeek R1 0528", premium: true, id: "DeepSeek-R1-0528" },
    ],
  },
  {
    model: "Mistral",
    icon: "/mistral.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "Mistral Medium 2565", premium: true, id: "mistral-medium-2565" },
      { name: "Mistral 3B", premium: true, id: "Mistral-3B" },
    ],
  },
  {
    model: "Grok",
    icon: "/grok.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "Grok 3 Mini", premium: false, id: "grok-3-mini" },
      { name: "Grok 3", premium: true, id: "grok-3" },
    ],
  },
  {
    model: "Cohere",
    icon: "/cohere.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "Cohere Command A", premium: false, id: "cohere-command-a" },
      { name: "Cohere Command R 08-2024", premium: false, id: "cohere-command-r-08-2024" },
    ],
  },
  {
    model: "Llama",
    icon: "/llama.png",
    premium: true,
    enable: true,
    subModel: [
      { name: "Llama 3.3 70B Instruct", premium: true, id: "Llama-3.3-70B-Instruct" },
      { name: "Llama 4 Scout 178 16E Instruct", premium: true, id: "Llama-4-Scout_178-16E-Instruct" },
    ],
  },
]
