import DownloadDropdown from './DownloadDropdown';

type Duration = '3m' | '6m' | '12m';

/** Giá niêm yết: 239.000đ / tài khoản / 3 tháng */
const BASE = 239_000;

interface Plan {
  duration: Duration;
  label: string;
  months: number;
  /** Hệ số nhân thời gian (so với BASE / 3 tháng) */
  periodMultiplier: number;
  /** % giảm giá theo thời hạn */
  durationDiscount: number;
  popular?: boolean;
}

const plans: Plan[] = [
  { duration: '3m',  label: '3 Tháng', months: 3,  periodMultiplier: 1, durationDiscount: 0  },
  { duration: '6m',  label: '6 Tháng', months: 6,  periodMultiplier: 2, durationDiscount: 10 },
  { duration: '12m', label: '1 Năm',   months: 12, periodMultiplier: 4, durationDiscount: 25, popular: true },
];

/** Giá 1 tài khoản theo gói */
function calcSingle(plan: Plan): number {
  return Math.round((BASE * plan.periodMultiplier * (1 - plan.durationDiscount / 100)) / 100) * 100;
}

/** Giá gốc 1 tài khoản (không chiết khấu thời hạn) */
function calcOriginal(plan: Plan): number {
  return BASE * plan.periodMultiplier;
}

/** Giá tài khoản thứ 2+ theo gói (rẻ hơn 10%) */
function calcAccount2(plan: Plan): number {
  return Math.round((BASE * 0.9 * plan.periodMultiplier * (1 - plan.durationDiscount / 100)) / 100) * 100;
}

const allFeatures: { text: string; hot?: boolean }[] = [
  { text: 'Quản lý đa tài khoản Zalo chung 1 màn hình' },
  { text: 'Chat, gửi ảnh, file, video, stickers. Gắn tags, tin nhắn nhanh' },
  { text: 'CRM quản lý liên hệ, nhóm, báo cáo' },
  { text: 'CRM Auto nhắn tin, kết bạn, mời vào nhóm' },
  { text: 'Tích hợp Workflow automation (n8n)' },
  { text: 'Tích hợp  AI Assistant, trả lời 24/7' },
  { text: 'Tích hợp POS, thanh toán, vận chuyển' },
  { text: 'Bảo mật tuyệt đối khi lưu trữ dữ liệu trên thiết bị của bạn' },
  { text: 'Hỗ trợ kỹ thuật 24/7' },
  { text: 'Update phần mềm trọn đời' },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="orbit-shell py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="orbit-badge mb-4 aos-element">
            💰 Bảng Giá
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4 aos-element delay-1">
            Giá minh bạch, <span className="gradient-text">không ẩn phí</span>
          </h2>
          <p className="text-slate-600 text-lg aos-element delay-2">
            Chỉ từ <strong className="text-slate-950">53.775đ / tài khoản / 1 tháng</strong> — dùng toàn bộ tính năng.
            Tài khoản thứ 2 trở đi giảm thêm <strong className="text-blue-700">10%</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => {
            const price = calcAccount2(plan);          // hiển thị giá tài khoản thứ 2+ (rẻ nhất)
            const firstPrice = calcSingle(plan);       // giá tài khoản đầu tiên (tham khảo)
            const originalPrice = calcOriginal(plan);
            const perMonth = Math.round(price / plan.months);
            const isFeatured = plan.popular;

            return (
              <div
                key={plan.duration}
                className={`relative rounded-2xl p-7 border transition-all duration-300 aos-element delay-${idx + 3} ${
                  isFeatured
                    ? 'pricing-featured border-purple-500/50'
                    : 'planet-card hover:border-indigo-200'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-slate-900 to-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ⭐ Tiết kiệm nhất
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-950">{plan.label}</h3>
                    {plan.durationDiscount > 0 && (
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        plan.duration === '12m'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        -{plan.durationDiscount}%
                      </span>
                    )}
                  </div>

                  {/* Headline price: account 2+ */}
                  <div className="flex items-baseline gap-1.5 mt-3">
                    <span className="text-4xl font-black text-slate-950">
                      {price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    * Từ tài khoản thứ 2 trở đi
                  </p>

                  <p className="text-slate-500 text-sm mt-0.5">/ tài khoản / {plan.label.toLowerCase()}</p>

                  {plan.durationDiscount > 0 && (
                    <p className="text-xs text-slate-600 mt-1 line-through">
                      {originalPrice.toLocaleString('vi-VN')}đ
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-slate-400 font-medium">
                      ≈ {perMonth.toLocaleString('vi-VN')}đ / tháng
                    </p>
                    <p className="text-xs text-slate-600">
                      TK đầu: {firstPrice.toLocaleString('vi-VN')}đ
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 text-sm">
                  {allFeatures.map((f) => (
                    <li key={f.text} className={`flex items-start gap-2.5 ${f.hot ? 'text-orange-700' : 'text-slate-700'}`}>
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${f.hot ? 'text-orange-500' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f.hot && <span className="mr-1">🔥</span>}{f.text}</span>
                    </li>
                  ))}
                </ul>

                <DownloadDropdown
                  label="Dùng thử ngay"
                  variant={isFeatured ? 'featured' : 'outlined'}
                  block
                  dropUp
                  align="center"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center aos-element">
          <div className="inline-flex items-center gap-3 planet-card rounded-2xl px-6 py-4">
            <span className="text-2xl">🎁</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-950">Dùng thử 3 ngày — Miễn phí 100%</div>
              <div className="text-xs text-slate-600">Mỗi tài khoản Zalo mới thêm vào tự động nhận 3 ngày trial. Toàn bộ tính năng.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
