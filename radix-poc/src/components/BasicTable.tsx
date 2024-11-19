import { Table } from "@radix-ui/themes";

const BasicTable = () => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell aria-sort="none">Age</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>John Doe</Table.RowHeaderCell>
          <Table.Cell>29</Table.Cell>
          <Table.Cell>USA</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jane Smith</Table.RowHeaderCell>
          <Table.Cell>34</Table.Cell>
          <Table.Cell>Canada</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Emma Brown</Table.RowHeaderCell>
          <Table.Cell>42</Table.Cell>
          <Table.Cell>UK</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default BasicTable;
