import React from "react";
import ResumeActions from "@/components/resume-actions";
import "./print.css";

export const metadata = {
  title: "Resume | Gláucia Dias",
  description: "Professional resume and qualifications",
};

export default function ResumePage() {
  return (
    <div className="space-y-0">
      {/* Header */}
      <header className="pt-32 pb-12 px-4 md:px-0 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Resume
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8">
              Professional experience and qualifications
            </p>
            <ResumeActions />
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-950 rounded-lg p-8 shadow-lg border border-zinc-800">
            {/* Personal Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-zinc-400">Name:</p>
                  <p className="text-white">Gláucia Dias</p>
                </div>
                <div>
                  <p className="text-zinc-400">Email:</p>
                  <p className="text-white">glaucia.belo.dias@gmail.com</p>
                </div>
                <div>
                  <p className="text-zinc-400">Phone:</p>
                  <p className="text-white">(42) 99936-0894</p>
                </div>
                <div>
                  <p className="text-zinc-400">Location:</p>
                  <p className="text-white">Ponta Grossa – PR</p>
                </div>
                <div>
                  <p className="text-zinc-400">GitHub:</p>
                  <a
                    href="https://github.com/FriggD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/FriggD
                  </a>
                </div>
                <div>
                  <p className="text-zinc-400">LinkedIn:</p>
                  <a
                    href="https://www.linkedin.com/in/gmbdias/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    linkedin.com/in/gmbdias
                  </a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Professional Summary
              </h2>
              <p className="text-zinc-300 mb-4">
                Fullstack Developer with solid background in Computer
                Engineering and ongoing Master's degree in Computer Science.
                Experience in web projects with JavaScript, Angular, ReactJS,
                NodeJS, .NET, C# and Python.
              </p>
              <p className="text-zinc-300">
                Experience with agile methodologies (Scrum, Kanban), Git, manual
                testing, system integration and AWS Lambda. Analytical,
                communicative and results-oriented profile.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Work Experience
              </h2>

              {/* Experience Items */}
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-zinc-400 mb-1">Selbetti Tecnologia</p>
                  <p className="text-zinc-400 mb-1">Mar/2024 – Present</p>
                </div>
                <p className="text-zinc-300">
                  Performed manual tests and validated functionalities of
                  systems integrated with WebServices. Manipulated data in XML
                  and PostgreSQL/MySQL databases to support testing. Created
                  test plans and used AWS Lambda for validation.
                  <span className="block mt-1">
                    <strong>Result:</strong> Increased manual test coverage to
                    100% of released features.
                  </span>
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Agile Master</h3>
                  <p className="text-zinc-400 mb-1">Selbetti Tecnologia</p>
                  <p className="text-zinc-400 mb-1">Mar/2023 – Mar/2024</p>
                </div>
                <p className="text-zinc-300">
                  Facilitated agile ceremonies (Scrum), promoting continuous
                  improvement and alignment with stakeholders. Applied
                  performance metrics and supported strategic technical
                  decisions.
                  <span className="block mt-1">
                    <strong>Result:</strong> Coordinated 4 agile teams
                    simultaneously (4 to 10 members) effectively.
                  </span>
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Systems Analyst (Fullstack)
                  </h3>
                  <p className="text-zinc-400 mb-1">
                    Rerum Engenharia de Sistemas
                  </p>
                  <p className="text-zinc-400 mb-1">Dec/2020 – Jan/2023</p>
                </div>
                <p className="text-zinc-300">
                  Developed applications with Angular, .NET, C# and Python.
                  Worked with GitLab, Jira and TFS/Azure. Supported PO and SM in
                  delivering scalable solutions.
                  <span className="block mt-1">
                    <strong>Result:</strong> Improved usability by implementing
                    a dairy production spreadsheet importer with multiple
                    validations, automated filling and accurate data saving.
                  </span>
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Systems Analyst
                  </h3>
                  <p className="text-zinc-400 mb-1">NTI – UEPG</p>
                  <p className="text-zinc-400 mb-1">May/2019 – May/2020</p>
                </div>
                <p className="text-zinc-300">
                  Development and maintenance of systems in Laravel and MySQL.
                  Work on data modeling and requirements analysis.
                  <span className="block mt-1">
                    <strong>Result:</strong> Implemented and documented the use
                    of the new virtual store of the University Publisher,
                    promoting user autonomy.
                  </span>
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Project Director
                  </h3>
                  <p className="text-zinc-400 mb-1">
                    E²C Junior Company of Computer Engineering
                  </p>
                  <p className="text-zinc-400 mb-1">2019 – 2021</p>
                </div>
                <p className="text-zinc-300">
                  Coordinated projects with ReactJS, NodeJS and React Native.
                  Management of finances, talents and budgets.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Computer Instructor
                  </h3>
                  <p className="text-zinc-400 mb-1">APAM</p>
                  <p className="text-zinc-400 mb-1">Apr/2018 – Nov/2018</p>
                </div>
                <p className="text-zinc-300">
                  Basic computer classes and digital inclusion for youth and
                  adults.
                  <span className="block mt-1">
                    <strong>Result:</strong> Taught pre-teens to identify and
                    research reliable sources on the internet.
                  </span>
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Education
              </h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>
                  <strong>UTFPR:</strong> Master's degree in Computer Science
                  (in progress)
                </li>
                <li>
                  <strong>Faculdade Descomplica:</strong> Post-graduation in
                  Data Analysis (in progress)
                </li>
                <li>
                  <strong>Faculdade Descomplica:</strong> MBA in Project
                  Management and Agile Methodologies
                </li>
                <li>
                  <strong>UEPG:</strong> Computer Engineering (2017 – 2023)
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>GitLab Certified Associate – GitLab</li>
                <li>Professional Scrum Master I – Scrum.org</li>
                <li>Black Belt Six Sigma Training – RL&associados</li>
                <li>Agile Leadership for Teams – Management 3.0</li>
                <li>Lean IT Foundation – TI Exames</li>
                <li>Leader in Agile Metrics – TI Exames</li>
                <li>Demystifying GitLab – Linux Tips</li>
              </ul>
            </div>

            {/* Activities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Leadership & Volunteer Activities
              </h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>
                  Academic Student Council President of Computer Engineering
                  (2019–2022)
                </li>
                <li>Student Representative at UEPG and CREA-jr (2021–2022)</li>
                <li>Volunteer at events such as CONEX and EAITI (2017–2022)</li>
              </ul>
            </div>

            {/* Academic Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pale_purple-400 to-pomp_and_power-500">
                Academic Projects & Research
              </h2>
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>
                  <strong>Academic Research (2021):</strong> Genomic Data
                  Imputation with GRU and Attention Mechanism
                </li>
                <li>
                  <strong>Research (2019):</strong> Periocular Verification with
                  Deep Learning
                </li>
                <li>
                  <strong>Extension (2018):</strong> Computer Museum –
                  Gamification for Environmental Education
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
