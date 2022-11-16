import { Layout } from "antd";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListEventApi } from "../../../state/slices/event.slice";

const localizer = momentLocalizer(moment);

export default function EventList() {
  const dispatch = useDispatch();
  const { events: Events } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(ListEventApi());
    //eslint-disable-next-line
  }, []);

  const event = ({ event }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: "5px",
          border: "1px solid darkgreen",
          color: "black",
        }}
      >
        {event.title}
        <br />{" "}
        <small style={{ marginLeft: "3px", color: "black" }}>
          {event.description}
        </small>{" "}
      </div>
    );
  };

  return (
    <Layout className="h-[100%]">
      <div className="" style={{ minHeight: 580 }}>
        <Calendar
          events={Events.data}
          step={60}
          localizer={localizer}
          showMultiDayTimes
          defaultDate={new Date()}
          style={{ minHeight: 580 }}
          components={{
            event: event,
          }}
        />
      </div>
    </Layout>
  );
}
