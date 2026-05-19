import DownloadDropdown from './DownloadDropdown';

const steps = [
  {
    num: '01',
    icon: '🔗',
    title: 'Đăng ký CTV miễn phí',
    desc: 'Mở phần Affiliate trong ứng dụng Deplao, nhấn "Đăng ký ngay". Hệ thống tự tạo mã giới thiệu riêng của bạn.',
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

const Affiliate: React.FC = () => {
  return (
    <section id="affiliate" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6d28d9, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-amber-300 border border-amber-500/30 bg-amber-500/10 mb-4 aos-element">
            Chương Trình Affiliate
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 aos-element delay-1">
            Giới thiệu bạn bè,{' '}
            <span className="gradient-text">nhận hoa hồng mãi mãi</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto aos-element delay-2">
            Mỗi người bạn giới thiệu mua Deplao — bạn nhận <strong className="text-white">30%</strong> đơn đầu và{' '}
            <strong className="text-white">15% trọn đời</strong> cho mọi lần gia hạn sau đó.
          </p>
        </div>

        {/* Commission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {commissions.map((c, idx) => (
            <div
              key={c.type}
              className={`glass rounded-2xl p-8 border border-white/5 aos-element delay-${idx + 2} relative overflow-hidden group hover:border-white/10 transition-all duration-300`}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 aos-element delay-3">
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
          <h3 className="text-2xl font-bold text-white text-center mb-8 aos-element">Cách thức hoạt động</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className={`relative glass rounded-2xl p-6 border border-white/5 aos-element delay-${idx + 2}`}>
                {/* Connector line */}
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

        {/* CTA */}
        <div className="text-center aos-element">
          <p className="text-slate-400 text-sm mb-5">
            Tính năng Affiliate có sẵn ngay trong ứng dụng Deplao sau khi tải về.
          </p>
          <DownloadDropdown
            label="Tải Deplao — Bắt đầu kiếm hoa hồng"
            variant="primary"
            align="center"
          />
        </div>
      </div>
    </section>
  );
};

export default Affiliate;

