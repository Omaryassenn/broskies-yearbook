import PropTypes from "prop-types";
import membersIcons from "@icons/members";
import MiniImage from "@components/MiniImage";
// import { NavLink } from "react-router-dom";
import styles from "@pages/Members.module.sass";

const MembersGrid = ({ members }) => {
  return (
    <div className={styles["members-grid"]}>
      {members.map((member, index) => (
        <div
          className="realtive flex flex-col justify-center text-center items-center w-fit"
          key={index}
        >
          <MiniImage
            className="w-[100px] h-[100px] rounded-xl"
            src={member.face}
            verticlPosition="center"
          />
          <h1 className="text-sm mt-2">{member.name}</h1>
        </div>
      ))}
    </div>
  );
};

const Header = ({ className, title, icon }) => {
  return (
    <div className={`${className} ${styles["header"]} flex gap-2 items-center`}>
      <img className="w-10 h-10" src={icon} alt={title} />
      <h1 className="text-2xl font-semibold text-[#ffffff] ">{title}</h1>
    </div>
  );
};

const MembersPage = ({ members }) => {
  return (
    <div className="relative h-full flex flex-col ">
      <div className="-z-10  absolute bg-[#bbc0167a]  w-[35%] h-[60%] translate-x-1/2 right-40  rounded-[90%] blur-3xl opacity-20 "></div>

      <div className="p-8 w-full">
        <Header title="أعمداء" icon={membersIcons.column} />
        <MembersGrid members={members.filter((m) => m.role === "عمود")} />
        <Header title="أعضاء" icon={membersIcons.members} />
        <MembersGrid members={members.filter((m) => m.role === "عضو")} />
        <Header title="مستجدين" icon={membersIcons.baby} />
        <MembersGrid members={members.filter((m) => m.role === "مستجد")} />
        <Header title="أصنام" icon={membersIcons.moai} />
        <MembersGrid members={members.filter((m) => m.role === "صنم")} />
      </div>
    </div>
  );
};
MembersGrid.propTypes = {
  members: PropTypes.array.isRequired,
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

MembersPage.propTypes = {
  members: PropTypes.array.isRequired,
};

export default MembersPage;
