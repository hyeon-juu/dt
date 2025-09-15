import { useEffect, useState } from "react";

function ShopList() {
  const [categories, setCategories] = useState([]);

  /*
    TODO: shopData.json 파일을 fetch()로 불러오세요.
    - useEffect() Hook을 반드시 사용해야 됩니다.
    - 데이터 파일의 위치: public/shopData.json
    - 가져온 데이터를 categories state에 저장하세요.
  */
  useEffect(() => {
    const res = fetch('public/shopData.json')
      .then((res) => res.json())
      .then((d) => {
        setCategories(d.categories);
      })
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Shop Data</h2>
      <ul>

        {/*
          TODO: categories state 배열을 map()으로 출력하세요.
          1) 카테고리 이름 출력
          2) 상품 이름 + 가격 출력
          3) 각 상품의 옵션 색상과 재고 표시
          <li>
            <h3>📂 카테고리 이름</h3>
            <ul>
              <li style={styles.product}>
                상품 이름 - 000,000원 <- 통화 표기법 toLocaleString() 
                <ul>
                  <li style={styles.option}>
                    상품의 옵션 색상 / 재고: 00
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        */}

        {
          categories.map((v) => {
            return (
              <li>
                <h3>📂 {v.name}</h3>
                <ul>
                  {
                    v.products.map((v) => {
                      return (
                        <li style={styles.product}>
                          {v.name} - {v.price.toLocaleString()}
                          <ul>
                            {
                              v.options.map((v) => {
                                return (
                                  <li style={styles.option}>
                                    {v.color} / 재고: {v.stock}
                                  </li>

                                )

                              })
                            }
                          </ul>
                        </li>

                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

const styles = {
  container: { border: "1px solid #ddd", padding: 20, width: "400px" },
  title: { fontSize: "20px", marginBottom: "10px" },
  product: { marginBottom: "15px", textAlign: "left" },
  option: { marginLeft: "10px", fontSize: "14px", color: "#555" },
};

export default ShopList;
