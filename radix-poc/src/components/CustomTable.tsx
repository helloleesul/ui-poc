import { Table } from "@radix-ui/themes";

const bannerRow = ["배너 이미지", "타이틀", "상태", "등록일", "수정일", "관리"];
const fakeTableData = [
  {
    bannerImage: "https://via.placeholder.com/150",
    title: "배너 타이틀 1",
    status: true,
    registeredDate: "2024-01-15",
    modifiedDate: "2024-02-10",
  },
  {
    bannerImage: "https://via.placeholder.com/150",
    title: "배너 타이틀 2",
    status: false,
    registeredDate: "2024-02-01",
    modifiedDate: "2024-02-15",
  },
  {
    bannerImage: "https://via.placeholder.com/150",
    title: "배너 타이틀 3",
    status: true,
    registeredDate: "2024-03-05",
    modifiedDate: "2024-03-20",
  },
  {
    bannerImage: "https://via.placeholder.com/150",
    title: "배너 타이틀 4",
    status: false,
    registeredDate: "2024-04-10",
    modifiedDate: "2024-05-01",
  },
  {
    bannerImage: "https://via.placeholder.com/150",
    title: "배너 타이틀 5",
    status: true,
    registeredDate: "2024-05-15",
    modifiedDate: "2024-06-10",
  },
];

const CustomTable = () => {
  const handleEventDelegation = (event: any) => {
    const { target } = event;

    // 버튼 클릭 처리
    if (target.tagName === "BUTTON") {
      const action = target.dataset.action;
      const index = target.closest("tr").dataset.index;
      alert(`${index} ${action}`);
      event.stopPropagation(); // 이벤트 버블링 방지
      return;
    }

    // 행 클릭 처리
    if (target.closest("tr")) {
      const index = target.closest("tr").dataset.index;
      alert(`${index} 클릭`);
    }
  };

  return (
    <Table.Root
      role="table"
      aria-label="배너 관리 테이블"
      variant="surface"
      className="custom-table"
    >
      <Table.Header>
        <Table.Row>
          {bannerRow.map((header) => {
            const isLastHeader = header === bannerRow[bannerRow.length - 1];
            return (
              <Table.ColumnHeaderCell
                className="font-bold"
                key={header}
                aria-label={isLastHeader ? header : undefined}
              >
                {isLastHeader ? "" : header}
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {fakeTableData.map((data, index) => (
          <Table.Row
            key={index}
            align="center"
            onClick={handleEventDelegation}
            data-index={index}
            tabIndex={index}
          >
            <Table.Cell minWidth="100px" width="100px">
              <img src={data.bannerImage} alt="banner" />
            </Table.Cell>
            <Table.RowHeaderCell>{data.title}</Table.RowHeaderCell>
            <Table.Cell>
              <span
                className={`${data.status ? "bg-green-400" : "bg-red-400"} inline-block text-center w-12 py-1 rounded text-white`}
              >
                {data.status ? "활성" : "비활성"}
              </span>
            </Table.Cell>
            <Table.Cell>{data.registeredDate}</Table.Cell>
            <Table.Cell>{data.modifiedDate}</Table.Cell>
            <Table.Cell minWidth="80px" width="80px" justify="center">
              <button data-action="delete">🗑</button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default CustomTable;
