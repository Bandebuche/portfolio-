import { ImageResponse } from "next/og";

export const alt = "Sachin Bandebuche — Website Developer in Nagpur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090D",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#6366F1",
              }}
            >
              SB
            </div>
            <div style={{ fontSize: "24px", fontWeight: "600", color: "#F8FAFC" }}>
              Sachin Bandebuche
            </div>
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34D399",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#34D399",
              }}
            />
            Based in Nagpur, Maharashtra
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#FFFFFF",
            }}
          >
            Website Developer in Nagpur
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: "400",
              color: "#94A3B8",
              maxWidth: "900px",
            }}
          >
            Custom Next.js Web Apps • High-Speed WordPress • Shopify E-Commerce • Sub-1s Load Speeds
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "18px",
            color: "#CBD5E1",
          }}
        >
          <div>35+ Live Websites Shipped • 4+ Years Experience</div>
          <div style={{ color: "#818CF8", fontWeight: "600" }}>websitelink.cc.cd</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
