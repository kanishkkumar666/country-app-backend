import React from "react";
import { Card, Accordion } from "react-bootstrap";

const AboutUsScreen = () => {
  return (
    <React.Fragment>
      <Card className="rounded border-0 my-3 p-3 bg-dark text-light">
        <Card.Title>Mission</Card.Title>
        <Card.Body>
          Safety. Security. Service. Our highest priority is to protect the
          lives and interests of U.S. citizens overseas. We do this through
          routine and emergency services to Americans at our embassies and
          consulates around the world. We serve our fellow citizens during their
          most important moments – births, deaths, disasters, arrests, and
          medical emergencies. The Bureau of Consular Affairs formulates and
          implements policy relating to immigration and consular services and
          ensures responsive and efficient provision of consular services
          overseas. Consular Affairs (CA) is the public face of the Department
          of State for millions of people around the world. CA is responsible
          for the welfare and protection of U.S. citizens abroad, for the
          issuance of passports and other documentation to citizens and
          nationals, and for the protection of U.S. border security and the
          facilitation of legitimate travel to the United States. CA also has a
          significant domestic presence, most notably the 29 U.S. Passport
          agencies and centers, 26 of which deal directly with the U.S. public.
          These far-reaching consular activities have broad foreign policy and
          domestic political implications and involve serious legal,
          humanitarian, and management concerns. Responsibility for these
          functions is vested within the Department of State in the Assistant
          Secretary for Consular Affairs and for their implementation abroad in
          consular officers assigned to embassies and consulates abroad. CA is
          also the Department’s largest Bureau in terms of domestic personnel
          and is almost entirely funded through revenue generated by consular
          fees. This revenue totaled $4.16 billion in 2015, making CA the
          equivalent of a Fortune 600 company.
        </Card.Body>
      </Card>

      <Accordion
        defaultActiveKey="0"
        className="rounded border-0 my-3 p-3 text-dark"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Passport</Accordion.Header>
          <Accordion.Body>
            A U.S. passport is your ticket to international travel. The U.S.
            passport is a request to foreign governments to permit you to travel
            or temporarily reside in their territories and have access to lawful
            local aid and protection. The passport allows you access to U.S.
            consular services and assistance while abroad. Most importantly, it
            allows you to re-enter the United States upon your return home.
            <br></br>
            <br></br>
            The Department of State issues U.S. passports to traveling U.S.
            citizens. We protect the integrity of the U.S. passport as proof of
            U.S. citizenship at home and around the world.
            <br></br>
            <br></br>
            <strong className="font-weight-bold">
              Passport Services consists of:
            </strong>
            <ul>
              <li>
                26 regional passport agencies and centers open to the public
              </li>
              <li>The Charleston Passport Center (not open to the public)</li>
              <li>1 Special Issuance Agency</li>
              <li>2 passport printing centers</li>
              <li>The National Passport Information Center</li>
              <li>
                A network of thousands of public offices across the United
              </li>
              <li>
                States designated to accept passport applications Headquarters
                offices in Washington, DC
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Visa</Accordion.Header>
          <Accordion.Body>
            The Office of Visa Services, in the Consular Affairs Bureau,
            Department of State provides various functions:
            <ul>
              <li>
                We serve as liaisons with the Department of Homeland Security
              </li>
              <li>
                We serve as liaisons between the Department of State and U.S.
                Embassies and Consulates abroad on visa matters
              </li>
              <li>
                We interpret visa laws and regulations, and act as a point of
                contact for the public.
              </li>
            </ul>
            <br></br>
            <br></br>
            Visa Services, Public Inquiries can usually explain what aspects of
            immigration law and regulation are applicable in certain cases, and
            can also check the current status of a particular case, if
            processing has been delayed.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>International Travel</Accordion.Header>
          <Accordion.Body>
            About Us
            <br></br>
            <br></br>
            The protection of U.S. citizens overseas is one of the Department of
            State’s highest priorities. We provide information designed to help
            U.S. citizens stay safe abroad, and U.S. Embassies and Consulates
            also provide emergency and non-emergency services to overseas U.S.
            citizens around the world.
            <br></br>
            <br></br>
            We help U.S. citizens in the event of arrest, death, destitution,
            crisis, or medical emergency overseas. We respond to welfare and
            whereabouts inquiries, and deal with nationality and citizenship
            matters.
            <br></br>
            <br></br>
            See also:
            <br></br>
            <br></br>
            International Travel
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Intercountry Adoption</Accordion.Header>
          <Accordion.Body>
            The Office of Children's Issues (CI), part of the Bureau of Consular
            Affairs at the U.S. Department of State, plays an active role in the
            intercountry adoption process. In our work, we are dedicated to
            assisting parents as they seek to provide a home to orphans abroad.
            <br></br>
            <br></br>
            We carry out the Department of State's responsibilities as the U.S.
            Central Authority for the Hague Adoption Convention. The Office of
            Children's Issues is responsible for the day-to-day oversight and
            implementation of the Hague Adoption Convention in the United
            States.
            <br></br>
            <br></br>
            Our Role
            <br></br>
            <br></br>
            The Office of Children's Issues (CI), part of the Bureau of Consular
            Affairs at the U.S. Department of State, plays an active role in the
            intercountry adoption process. In our work, we are dedicated to
            assisting parents as they seek to provide a home to orphans abroad.
            <br></br>
            <br></br>
            We serve as the U.S. Central Authority for the Hague Convention on
            Protection of Children and Co-operation in Respect of Intercountry
            Adoption. Also known as the Hague Adoption Convention, this is an
            international treaty among over 90 nations around the world,
            including the United States. The Office of Children's Issues is
            responsible for the day-to-day oversight and implementation of the
            Convention in the United States.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
};

export default AboutUsScreen;
