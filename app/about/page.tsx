import { faker } from '@faker-js/faker';

function About() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-2xl mb-4">About Our Service</h1>
      <img src="https://sun9-37.userapi.com/impg/j28trZfbY5kvb-l3Ve4GjFDu1UT5dD8zMCin9w/TWa9ehhTwMI.jpg?size=807x488&quality=95&sign=00b280ef55e775558cdac26bdf34c1ef&c_uniq_tag=VeAk4anAPFS2pfxfcQ745rhsI-RsCIacMojmWHAH4as&type=album" alt="About Us" className="mb-4" />
      <p>{faker.lorem.paragraphs()}</p>
    </div>
  );
}

export default About;
