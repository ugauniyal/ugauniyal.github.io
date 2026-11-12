export interface Review {
  quote: string;
  author: string;
  role: string;
}

export const reviews: readonly Review[] = [
  {
    quote:
      'Utkarsh builds robust, scalable backend architectures. He has a knack for anticipating future needs, ensuring the systems he builds can handle significant growth without failure.',
    author: 'Vikas Verma',
    role: 'Ex-Investment Banker',
  },
  {
    quote:
      'His attention to detail is remarkable. He creates interfaces that are not only visually appealing but also extremely user-friendly.',
    author: 'Saurabh Sharma',
    role: 'CEO, Sqaby Technologies',
  },
  {
    quote:
      "Utkarsh is a true professional. He's communicative, technically brilliant, and has a great instinct for what a project actually needs, not just what's asked for.",
    author: 'Vikrant Yadav',
    role: 'Founder, Manastha',
  },
];
