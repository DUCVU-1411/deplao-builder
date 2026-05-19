import { Link } from 'react-router-dom';
import logo from '../logo/icon.png';

const steps = [
  {
    num: '01',
    icon: '🔗',
    title: 'Đăng ký CTV miễn phí',
    desc: 'Mở phần Affiliate trong ứng dụng Deplao (Cài đặt → Affiliate), nhấn "Đăng ký ngay". Hệ thống tự tạo mã giới thiệu riêng của bạn.',
  },
  {
    num: '02',
    icon: '📣',
    title: 'Chia sẻ mã của bạn',
    desc: 'Gửi mã giới thiệu cho bạn bè, khách hàng hoặc chia sẻ lên mạng xã hội. Người dùng mới nhập mã khi kích hoạt phần mềm lần đầu.',
  },
  {
    num: '03',
    icon: '💰',
    title: 'Nhận hoa hồng tự động',
    desc: 'Hoa hồng được ghi nhận ngay khi giao dịch được xác nhận. Xem dashboard trực tiếp trong ứng dụng, rút tiền về tài khoản ngân hàng bất cứ lúc nào.',
  },
];

const commissions = [
  {
    type: 'Giao dịch đầu tiên',
    rate: '30%',
    desc: 'Khi người bạn giới thiệu mua lần đầu',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
    badge: '🎉 Cao nhất',
    badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    type: 'Gia hạn (trọn đời)',
    rate: '15%',
    desc: 'Mỗi lần gia hạn tiếp theo của họ',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(124,58,237,0.25)',
    badge: '♾️ Trọn đời',
    badgeClass: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  },
];

const highlights = [
  { icon: '👥', label: 'Không giới hạn', sub: 'số người giới thiệu' },
  { icon: '⚡', label: 'Ghi nhận tức thì', sub: 'sau khi xác nhận TT' },
  { icon: '🏦', label: 'Rút tiền linh hoạt', sub: 'tối thiểu 500.000đ' },
  { icon: '📊', label: 'Dashboard realtime', sub: 'theo dõi trong app' },
];

const faqs = [
  {
    q: 'Ai có thể tham gia chương trình Affiliate?',
    a: 'Bất kỳ ai sử dụng Deplao đều có thể đăng ký làm CTV. Không yêu cầu kinh nghiệm hay vốn đầu tư.',
  },
  {
    q: 'Làm sao để lấy mã giới thiệu?',
    a: 'Sau khi đăng nhập tài khoản Zalo trong Deplao, vào Cài đặt → Affiliate → nhấn "Đăng ký ngay". Hệ thống tự tạo mã giới thiệu duy nhất cho bạn.',
  },
  {
    q: 'Hoa hồng được tính như thế nào?',
    a: 'Bạn nhận 30% giá trị giao dịch đầu tiên của người được giới thiệu và 15% cho mỗi lần gia hạn sau đó — trọn đời, không giới hạn.',
  },
  {
    q: 'Khi nào tôi có thể rút tiền?',
    a: 'Bạn có thể yêu cầu rút tiền bất cứ lúc nào khi số dư tối thiểu đạt 500.000₫. Tiền được chuyển về tài khoản ngân hàng trong vòng 24h làm việc.',
  },
  {
    q: 'Có giới hạn số người tôi có thể giới thiệu không?',
    a: 'Không! Bạn có thể giới thiệu không giới hạn số người. Càng giới thiệu nhiều, thu nhập thụ động càng lớn.',
  },
  {
    q: 'Hoa hồng có bị hết hạn không?',
    a: 'Không. Hoa hồng gia hạn là trọn đời — miễn là người bạn giới thiệu tiếp tục sử dụng và gia hạn Deplao, bạn vẫn nhận hoa hồng.',
  },
];

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-[#060a18] text-white">
      {/* Simple header */}
      <nav className="border-b border-white/5 bg-[#060a18]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline group">
            <img src={logo} alt="Deplao" className="w-8 h-8 rounded-lg object-contain group-hover:scale-105 transition-transform" />
            <span className="font-bold text-lg text-white tracking-tight">Deplao</span>
          </Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">
            ← Về trang chủ
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-amber-300 border border-amber-500/30 bg-amber-500/10 mb-4">
            Chương Trình Affiliate
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Giới thiệu bạn bè,{' '}
            <span className="gradient-text">nhận hoa hồng mãi mãi</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mỗi người bạn giới thiệu mua Deplao — bạn nhận <strong className="text-white">30%</strong> đơn đầu và{' '}
            <strong className="text-white">15% trọn đời</strong> cho mọi lần gia hạn sau đó.
          </p>
        </div>

        {/* Commission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {commissions.map((c) => (
            <div
              key={c.type}
              className="glass rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-300"
              style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px ${c.glow}` }}
            >
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${c.color} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`} />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">{c.type}</p>
                  <div className={`text-7xl font-black bg-gradient-to-br ${c.color} bg-clip-text text-transparent leading-none`}>
                    {c.rate}
                  </div>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${c.badgeClass}`}>
                  {c.badge}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-xl p-5 text-center border border-white/5 hover:border-purple-500/20 transition-colors">
              <div className="text-3xl mb-2">{h.icon}</div>
              <div className="text-sm font-bold text-white">{h.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{h.sub}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Cách thức hoạt động</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative glass rounded-2xl p-6 border border-white/5">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-purple-500/50 to-transparent z-10" />
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg w-9 h-9 flex items-center justify-center">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chính sách chi tiết */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Chính sách Affiliate chi tiết</h2>
          <div className="glass rounded-2xl border border-white/5 p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-emerald-400">💵</span> Cơ cấu hoa hồng
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong className="text-white">30% hoa hồng</strong> cho lần thanh toán đầu tiên của người được giới thiệu</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span>
                  <span><strong className="text-white">15% hoa hồng trọn đời</strong> cho mỗi lần gia hạn tiếp theo — không giới hạn thời gian</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span>
                  <span>Hoa hồng được ghi nhận tức thì khi giao dịch xác nhận thành công</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">🏦</span> Quy định rút tiền
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">•</span>
                  <span>Số dư tối thiểu để rút: <strong className="text-white">500.000 ₫</strong></span>
                </li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">•</span>
                  <span>Chuyển khoản ngân hàng — hỗ trợ tất cả ngân hàng nội địa Việt Nam</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">•</span>
                  <span>Thời gian xử lý: <strong className="text-white">trong vòng 24h làm việc</strong> kể từ khi yêu cầu</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">•</span>
                  <span>Không giới hạn số lần rút tiền</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-amber-400">📋</span> Điều kiện tham gia
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span>
                  <span>Đã cài đặt và sử dụng phần mềm Deplao</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span>
                  <span>Đã đăng nhập ít nhất 1 tài khoản Zalo trong ứng dụng</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span>
                  <span>Đăng ký CTV trong mục Cài đặt → Affiliate</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span>
                  <span>Không sử dụng hình thức gian lận (tự giới thiệu chính mình, tạo tài khoản ảo...)</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-red-400">⚠️</span> Lưu ý quan trọng
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>
                  <span>Deplao có quyền thu hồi hoa hồng nếu phát hiện gian lận</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>
                  <span>Mã giới thiệu là duy nhất và gắn với tài khoản Zalo đã đăng ký</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>
                  <span>Chương trình có thể thay đổi chính sách với thông báo trước 30 ngày</span>
                </li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>
                  <span>Giao dịch bị hoàn tiền (refund) sẽ không tính hoa hồng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-5">
            Tính năng Affiliate có sẵn ngay trong ứng dụng Deplao sau khi tải về.
          </p>
          <a
            href="/#download"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
            style={{ background: 'linear-gradient(135deg, #6d28d9, #3b82f6)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Tải Deplao — Bắt đầu kiếm hoa hồng
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl p-5 border border-white/5">
                <h4 className="text-sm font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-white/5 bg-[#060a18]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Deplao. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-slate-400 transition-colors no-underline">Trang chủ</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors no-underline">Điều khoản sử dụng</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

