import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import dataMock from "./db.json";

interface setDataProps {
  group: string;
  data: object[];
}

async function setData({ group, data }: setDataProps) {
  const dbCollection = collection(db, group);
  const hasDbCollection = await getDocs(dbCollection);

  if (!hasDbCollection.empty) {
    console.log(
      `❌ A coleção \x1b[1m${group}\x1b[0m já existe no banco de dados!`,
    );
    return;
  }

  for (const item of data) {
    await setDoc(doc(dbCollection), item);
  }
  console.log(
    `✅ A coleção \x1b[1m${group}\x1b[0m foi criada no banco de dados!`,
  );
}

const dataList = [
  { group: "products", data: dataMock.products },
  { group: "departaments", data: dataMock.departaments },
  { group: "blog", data: dataMock.blog },
  { group: "brands", data: dataMock.brands },
  { group: "orders", data: dataMock.orders },
];

const dataPromise = dataList.map((param) => setData(param));

Promise.all(dataPromise)
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
