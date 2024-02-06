package com.earlybird.api.ticket.domain;

import com.earlybird.api.BaseEntity;
import com.earlybird.api.user.domain.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "ticket")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Ticket extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(name = "description")
    private String description;

    @Column(name = "expired_at")
    private LocalDate expiredAt;

    @Column(name = "used_at")
    private LocalDate usedAt;

    public Ticket(User user, String description, LocalDate expiredAt) {
        this.user = user;
        this.description = description;
        this.expiredAt = expiredAt;
    }

    public void use() {
        if (isExpired() || isUsed()) {
            throw new IllegalStateException("이미 사용되었거나 만료된 티켓입니다.");
        }
        usedAt = LocalDate.now();
    }

    public boolean isExpired() {
        LocalDate today = LocalDate.now();
        return today.isAfter(expiredAt);
    }

    public boolean isUsed() {
        return usedAt != null;
    }
}
