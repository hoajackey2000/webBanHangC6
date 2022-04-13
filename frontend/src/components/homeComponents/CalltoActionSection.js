import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>BẠN CÓ CẦN THÊM LỜI KHUYÊN?</h2>
              <p>Đăng ký miễn phí và nhận các thủ thuật mới nhất.</p>
              <form className="form-section">
                <input placeholder="Email của bạn..." name="email" type="email" />
                <input value="Tôi muốn" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
